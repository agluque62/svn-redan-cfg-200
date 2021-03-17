/** 20191003 Detecta si se ha arrancado en debug */
var debug = typeof v8debug === 'object'
    || /--debug|--inspect/.test(process.execArgv.join(' '));
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var net = require('net');
var fs = require('fs');
var cors = require('cors');
var util = require('util');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users/users');
var gateways = require('./routes/gateways/gateways');
var configurations = require('./routes/configurations/configurations');
var services = require('./routes/gateways/services');
var hardware = require('./routes/hardware/hardware');
var resources = require('./routes/hardware/resources');
var sites = require('./routes/sites/sites');
var tableBss = require('./routes/tableBss/tableBss');
var externalResources = require('./routes/externalResources/externalResources');
var radioDestinations = require('./routes/destinations/radioDestinations');
var hrr = require('./routes/hrr/hrr');
var historics = require('./routes/historics/historics');
var version = require('./routes/version/version');
// var logging = require('./lib/loggingDate.js');
var logging = require('./lib/nu-log.js');
/** 20191003 Configuracion diferenciada en modo debug */
var config = require(debug ? './configUlises-dev.json' : './configUlises.json');
//var controlAccess=require('./routes/services/accessControl');
var myLibHistorics = require('./lib/historics.js');
var myLibConfig = require('./lib/configurations.js');
var myLibHardwareGateways = require('./lib/hardware.js');
var myLibExtResources = require('./lib/externalResources.js');
var jsonTemplate = require('./lib/jsonTemplate');

// var jsgtw = require('./public/javascripts/gateways.js');
var bdtgw = require('./lib/gateways.js');

/** 20170525. AGL. Para el control de Sesiones. */
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var moment = require('moment');
var ctrlSesiones = { user: null, localSession: null };
var aliveGtws = [];
var homepath = config.Ulises.homepath;

/** 20180829. Variables de Entorno en Base de Datos */
process.env.DB_HOST = process.env.DB_HOST || config.Ulises.dbhost;
process.env.DB_BASE = process.env.DB_BASE || config.Ulises.dbdatabase;
process.env.DB_USER = process.env.DB_USER || config.Ulises.dbuser;
process.env.DB_PASS = process.env.DB_PASS || config.Ulises.dbpassword;
process.env.DB_PORT = process.env.DB_PORT || config.Ulises.dbport;

//{ip:'',online:'',time:''}

/***/
// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
var ID_HW = 'CFG';
var ACCESS_SYSTEM_OK = 50;
var ACCESS_SYSTEM_FAIL = 51;
var USER_LOGOUT_SYSTEM = 55;
function insertHistoric(code, user, reason) {
    myLibHistorics.postHistorics(
        {
            IdIncidencia: code,
            IdHw: ID_HW,
            Usuario: user,
            Param: reason
        }
        , function (h) {
        });
}
function checkPerfil(userprofile) {
    var allProfMsc = (0x0001 | 0x0010 | 0x0020 | 0x0040 | 0x0200 | 0x0400 | 0x8000);
    var valProfile = ((userprofile & allProfMsc) ? true : false);
    return valProfile;
}
passport.use(new Strategy(
    function (username, password, cb) {
        logging.Trace(config.Ulises.LoginSystemTrace, 'Passport Strategy function: ' + username + '/' + password);
        logging.Info(ctrlSesiones.localSession);
        if (ctrlSesiones.localSession) {
            insertHistoric(ACCESS_SYSTEM_FAIL, username, 'Existe una sesion activa.');
            return cb(null, false, { message: 'Existe una sesion activa.' });
        }
        var pwdB64 = new Buffer(password).toString('base64');
        require("./lib/users").findByUsername(username, function (err, user) {
            if (err) {
                insertHistoric(ACCESS_SYSTEM_FAIL, username, err);
                return cb(err);
            }
            if (!user) {
                insertHistoric(ACCESS_SYSTEM_FAIL, username, 'No existe el usuario');
                return cb(null, false, { message: 'No existe el usuario' });
            }
            if (checkPerfil(user.perfil) == false) {
                insertHistoric(ACCESS_SYSTEM_FAIL, username, 'Perfil de usuario no adecuado');
                return cb(null, false, { message: 'Perfil de usuario no adecuado' });
            }
            if (user.clave != pwdB64) {
                insertHistoric(ACCESS_SYSTEM_FAIL, username, 'Password incorrecta.');
                return cb(null, false, { message: 'Password incorrecta.' });
            }
            insertHistoric(ACCESS_SYSTEM_OK, user.name, '');
            return cb(null, user);
        });
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function (user, cb) {
    ctrlSesiones.user = user;
    cb(null, user.idOPERADORES);
    logging.Trace(config.Ulises.LoginSystemTrace, 'serializeUser: ' + user.idOPERADORES.toString() + ', ' + user.perfil.toString());
});
passport.deserializeUser(function (id, cb) {
    // require("./lib/users").findById(id, function (err, user) {
    //   if (err) { return cb(err); }
    //   cb(null, user);
    //   console.log('deserializeUser: ' + id.toString());
    // });
    logging.Trace(config.Ulises.LoginSystemTrace, 'deserializeUser: ' + id.toString());
    if (ctrlSesiones.user)
        return cb(null, ctrlSesiones.user);
    return cb("No hay usuario logeado...");
});
/*****/

logging.Info('Program started. DEBUG = ' + debug);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('aliveGtws', aliveGtws);

// // uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/images/favicon.ico'));

// AGL.. Clear Update folder
require('del').sync(['./uploads/**', '!./uploads']);

// to updload files
var multer = require('multer');
app.post('/', [
    multer({
        dest: './uploads/'
    }).single('upl'),
    function (req, res) {
        logging.Info(req.method, req.originalUrl, req.file); //form files
        var retorno = {};
        //Inicializar el campo
        fs.readFile(req.file.path, 'utf8', function (err, contents) {
            myLibConfig.checkExportGtwNamesOrIpDup(req.body.config, req.body.site, JSON.parse(contents), function (result) {
                if (result.data == 'OK') {
                    logging.Info('Comprobación de importación correcta');
                    myLibConfig.postConfigurationFromJsonFile(req.body.config, req.body.site, JSON.parse(contents), function (result) {
                        if (!result.error) {
                            retorno.msg = 'Configuracion importada correctamente';
                            logging.Info('Configuracion importada correctamente');
                        }
                        else {
                            retorno.err = req.file.message;
                            logging.Error(req.file.message);
                        }
                        res.json(retorno);
                    });
                }
                else {
                    if (result.data == 'DUPLICATED') {
                        //alertify.error('Configuracion no importada. La pasarela (nombre o ips) ya existe en la configuración. ' +
                        //	'Elimine la pasarela o cambie los datos antes de importar.');
                        logging.Error('Configuracion no importada. La pasarela (nombre o ips) ya existe en la configuración. ' +
                            'Cambie los datos antes de importar');
                        retorno.err = 'Configuracion no importada. La pasarela (nombre o ips) ya existe en la configuración. ' +
                            'Cambie los datos antes de importar';
                    }
                    else {
                        //alertify.error('Configuracion no importada. Error en la operación.');
                        logging.Error('Configuracion no importada. Error en la operación.');
                        retorno.err = 'Configuracion no importada. Error en la operación.';
                    }
                    res.json(retorno);
                }
            });
        });
    }
]);

// create a write stream (in append mode)
//var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})
//app.use(logger('dev', {stream: accessLogStream}));

// app.use(logger('dev'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
});

app.use(bodyParser.json());                                 // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));        // to support URL-encoded bodies
app.use(cookieParser());
// app.use(express.static(process.cwd() + "/Ulises/dist/Ulises"));
// app.use(express.static(process.cwd() + "/frontend/dist/Ulises"));
app.use(express.static(process.cwd() + homepath));


app.options('*', cors());
app.use(cors());

app.use(function (req, res, next) {
    res.setTimeout(config.Ulises.timeout, function () {       
        logging.Info('Request has timed out.');
        res.json({code: 'ETIMEDOUT'});
    });
    next();
});

/** 20170525. AGL. Para el control de Sesiones. */
/** Para el control de Sesiones. */
var login_timeout = config.Ulises.LoginTimeOut == 0 ? 60000 : config.Ulises.LoginTimeOut * 60000;
var session = require('express-session');
var MemoryStore = require('memorystore')(session);
app.use(session(
    {
        secret: 'clave-secreta', resave: false, saveUninitialized: false,
        store: new MemoryStore({ checkPeriod: 86400000 /* prune expired entries every 24h*/ }),
        cookie: { maxAge: login_timeout }
    }));
function sessionCleanup() {
    sessions.sessionStore.all(function (err, sessions) {
        for (var i = 0; i < sessions.length; i++) {
            sessionStore.get(sessions[i], function () { });
        }
    });
}
// sessionCleanup();

app.use(flash());
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// AGL. Mensajes para la pantalla login
function msg4Login(req, msg) {
    if (msg) {
        global.msg = msg;
        req.flash('error', msg);
    }
    else {
        var flash_msg = req.flash('error');
        // console.log("<" + arguments.callee.caller.name.toString() + ">: " + 'flash: ' + flash_msg);
        if (flash_msg.length == 0) {
            flash_msg = global.msg;
            delete global.msg;
            // console.log("<" + arguments.callee.caller.name.toString() + ">: " + 'global.msg: ' + flash_msg);
        }
        return flash_msg;
    }
}

var isAuthenticated = function (req, res, next) {

    logging.Info(ctrlSesiones.localSession)
    logging.Info(req.isAuthenticated())

    if (ctrlSesiones.localSession != null && req.isAuthenticated()) {
        return next();
    }
    res.status(401).json('Not authenticated');
}

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/config', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/config/:id', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});


app.get('/home/config/audio-bss-table', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/config/ext-resources', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/config/users', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/gateway/new', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/gateway/:id', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/resource/new', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/resource/:id', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/maintenance/historic', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/maintenance/server-conf', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/maintenance/version', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/backupbd/params', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/backupbd/historic', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/backupbd/manual', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/home/backupbd/restore', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.get('/access', (req, res) => {
    res.sendFile(process.cwd() + homepath + "/index.html");
});

app.post('/backup/:host',
    function (req, res) {
        postBackupManual(`http://${req.params.host}/backup`, {}, function (result) {
            res.json(result);
        });
    });

app.get('/backup/:host/log',
    function (req, res) {
        getBackupLog(`http://${req.params.host}/log`, function (result) {
            res.json(result);
        });
    });

app.post('/backup/:host/log',
    function (req, res) {
        deleteBackupLog(`http://${req.params.host}/log`, {}, function (result) {
            res.json(result);
        });
    });

app.post('/backup/:host/config',
    function (req, res) {
        postBackupConfig(`http://${req.params.host}/config`, req.body, function (result) {
            res.json(result);
        });
    });

app.get('/backup/:host/config',
    function (req, res) {
        getBackupLog(`http://${req.params.host}/config`, function (result) {
            res.json(result);
        });
    });

app.get('/about',
    function (req, res) {
        res.sendFile(path.join(__dirname, 'COPY.AUTHORIZATION.txt'));
    });

app.get('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function (err) {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});

app.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {

        logging.Info(err, user, info);
        logging.Info(ctrlSesiones.localSession);

        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).json({ "message": info.message })
        }

        req.logIn(user, function (err) {
            if (err) { return next(err); }
            ctrlSesiones.localSession = req.session;
            ctrlSesiones.localSession.lastTick = moment();
            return res.json(ctrlSesiones.user);
        });
    })(req, res, next);
});

app.get('/logout',
    function (req, res) {
        logging.Info(req.method, req.originalUrl);
        insertHistoric(USER_LOGOUT_SYSTEM, ctrlSesiones.user.name, '');
        ctrlSesiones.localSession = null;
        req.logout();
        res.json();
    });

/** 20170808 AGL. TICK de Sesion Activa */
app.get('/alive',
    //  isAuthenticated,
    function (req, res, next) {

        if (ctrlSesiones.localSession) {
            ctrlSesiones.localSession.lastTick = moment();
        }

        if (req.isAuthenticated()) {
            bdtgw.getGatewaysPendings(function (npas) {
                res.json({ alive: "ok", gwpendientes: npas });
            });
        }
        else {
            // msg4Login(req, 'La sesion ha expirado. Identifiquese de nuevo');
            // console.log('redirect to /login from /alive');
            res.status(401).json({ 'error': 'La sesión ha expirado. Identifiquese de nuevo.' })
        }
    });

/** 20070908 AGL. Para Leer / Escribir la configuracion local del servidor */
app.get('/localconfig',
    isAuthenticated,
    function (req, res, next) {
        res.json(config.Ulises);
    });

/** */
var Ajv = require('ajv');
var ajv = Ajv({ AllErrors: true });

var validateLocalConfig = ajv.compile(
    {
        "properties": {
            "BackupServiceDomain": { "type": "string" },
            "Date": { "type": "string" },
            "Files": { "items": {}, "type": "array" },
            "HistoricsDeep": { "type": "integer" },
            "LoginSystemTrace": { "type": "boolean" },
            "LoginTimeOut": { "type": "integer" },
            "MySQL": { "type": "string" },
            "NodeJS": { "type": "string" },
            "Region": { "type": "string" },
            "SubVersion": { "type": "string" },
            "Version": { "type": "string" },
            "dbdatabase": { "type": "string" },
            "dbhost": { "type": "string" },
            "dbpassword": { "type": "string" },
            "dbuser": { "type": "string" },
            "dbport": { "type": "string" },
            "log2con": { "type": "string" },
            "log2file": { "type": "string" },
            "logfile_maxfiles": { "type": "integer" },
            "logfile_path": { "type": "string" },
            "logfile_sizefile": { "type": "integer" },
            "maxCycleTime": { "type": "integer" },
            "morgan": { "type": "boolean" },
            "refreshTime": { "type": "integer" },
            "R16Mode": { "type": "boolean" },
            "LoadIndexControlEnabled": { "type": "boolean" },
            "timeout": { "type": "integer" }
        },
        "required": [
            "LoginTimeOut", "morgan", "logfile_sizefile", "SubVersion", "dbhost",
            "logfile_path", "logfile_maxfiles", "log2file", "BackupServiceDomain",
            "Region", "maxCycleTime", "log2con", "dbuser", "Date", "dbpassword", "dbport",
            "refreshTime", "NodeJS", "Files", "HistoricsDeep", "dbdatabase",
            "Version", "MySQL", "LoginSystemTrace"
        ]
    });

app.post('/localconfig',
    isAuthenticated,
    function (req, res) {
        // console.log(req.body);

        // Chequear coherencia.
        if (validateLocalConfig(req.body)) {
            // Lo salvo en los datos...
            config.Ulises = req.body;
            // Lo salvo en el fichero...
            var Ulises = { Ulises: req.body, MemorySupervisor: config.MemorySupervisor };
            fs.writeFile("./configUlises.json", JSON.stringify(Ulises, null, 2), function (err) {
                if (err) res.json({ res: false, txt: 'Error fs.writeFile' });
                else {
                    res.json({ res: true, txt: 'File saved.' });
                    logging.Configure(Ulises.Ulises);
                }
            });
        }
        else {
            res.json({ res: false, txt: 'JSON no valido...' });
        }
    });

app.use('/users', isAuthenticated, users);
app.use('/gateways', gateways);
app.use('/configurations', configurations);
app.use('/services', isAuthenticated, services);
app.use('/hardware', isAuthenticated, hardware);
app.use('/resources', isAuthenticated, resources);
app.use('/sites', isAuthenticated, sites);
app.use('/destinations', isAuthenticated, radioDestinations);
app.use('/historics', isAuthenticated, historics);
app.use('/version', isAuthenticated, version);
app.use('/tableBss', isAuthenticated, tableBss);
app.use('/externalResources', isAuthenticated, externalResources);
app.use('/hrr', isAuthenticated, hrr);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        var msg = 'Development error handler: ' + req.method + ' ' + req.originalUrl.toString() + ', Error: => ' + err.message;
        res.status(err.status || 500);
        res.json({ error: msg });
        logging.Error(msg);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    var msg = 'Production error handler: ' + req.method + ' ' + req.originalUrl.toString() + ', Error: ' + err.message;
    res.status(err.status || 500);
    res.json({ error: msg });
    logging.Error(msg);
});

// Prepare historics deep
setImmediate(function () {
    logging.Trace('Running once a day. Historics deep: ' + config.Ulises.HistoricsDeep + ' days.');
    myLibHistorics.deepHistorics(config.Ulises.HistoricsDeep, function (result) {
        logging.Trace('Historics record removed: ' + result.affectedRows + ', ' + result.error);
    });
    myLibConfig.resetGatewaysSynchroState(function (result) {
        logging.Trace('Reset Gateways Synchro State: ' + result.result);
    });
});

setInterval(function () {
    logging.Trace('Running once a day. Historics deep: ' + config.Ulises.HistoricsDeep + ' days.');
    myLibHistorics.deepHistorics(config.Ulises.HistoricsDeep, function (result) {
        logging.Trace('Historics record removed: ' + result.affectedRows);
    });
}, 86400000);

/** 20170525. AGL. Para el control de Sesiones. */
var intervalObject = setInterval(function () {
    if (ctrlSesiones.localSession) {
        if (moment().diff(ctrlSesiones.localSession.lastTick, "seconds") > 60) {
            logging.Trace("La Session ha expirado...El cliente no genera los ticks");
            insertHistoric(USER_LOGOUT_SYSTEM, ctrlSesiones.user.name, 'La Session ha expirado...El cliente no genera los ticks.');
            ctrlSesiones.localSession = null;
        }
        else if (moment().isAfter(moment(ctrlSesiones.localSession.cookie._expires))) {
            logging.Trace("La Session ha expirado....");
            insertHistoric(USER_LOGOUT_SYSTEM, ctrlSesiones.user.name, 'La Session ha expirado....');
            ctrlSesiones.localSession = null;
        }
    }
    logging.Trace(config.Ulises.LoginSystemTrace, moment().toString() + ": " +
        (ctrlSesiones.localSession ? ("Sesion Activa hasta : " + moment(ctrlSesiones.localSession.cookie._expires).toString()) : "No Session"));
}, 5000);

var synch = setInterval(function () {
    var maxCycleTime = config.Ulises.maxCycleTime;
    for (var i = 0; i < aliveGtws.length; i++) {
        if (aliveGtws[i].online == true) {
            aliveGtws[i].time = (aliveGtws[i].time + parseInt(config.Ulises.refreshTime));
            if (aliveGtws[i].time >= maxCycleTime) {
                aliveGtws[i].online = false;
                aliveGtws[i].isSinch = false;
            }
        }
        else
            aliveGtws[i].isSinch = false;
    }
}, config.Ulises.refreshTime);
/*************************/

fs.watchFile(require.resolve('./configUlises.json'), function () {
    /** Para cargar dinamicamente los cambios de configuracion */
    delete require.cache[require.resolve('./configUlises.json')];
    config = require('./configUlises.json');
    console.log('Configuracion cambiada...');
});

app.set('port', process.env.PORT || 5050);

//Variable para usuario ya conectado
app.locals.isAuthenticated = false;
app.locals.AuthenticatedUser = 'none';

app.listen(app.get('port'), function () {
    logging.Info('Listening UG5k-Serv on port ', app.get('port'));
    logging.Info('Express started in ', app.get('env'));
});

module.exports = app;

/** Supervidor de Memoria. Cuando la memoria utlizada supere en un 100% la inicial, y el intervalo horario sea de 20:00 a 06:00
    se reinicia la aplicacion */
logging.Info('Memory Supervisor started: ', config.MemorySupervisor);
var heapInit = 0;
setInterval(function () {
    try {
        global.gc();
    } catch (e) {
        logging.Info("You must run program with 'node --expose-gc'");
        process.exit();
    }

    //2. Output Heap stats
    var heapUsed = process.memoryUsage().heapUsed;
    if (heapInit === 0) {
        heapInit = heapUsed;
        logging.Info('Program started with ', heapInit, " bytes allocated...");
    }
    else {
        var percent = ((heapUsed / heapInit) * 100).toFixed(2);
        logging.Info('The program is using ' + heapUsed + ' bytes of memory, ' + percent + '% of the memory used at startup');
        if (percent > config.MemorySupervisor.PercentLimit) {
            logging.Error('Program is running out of memory');
            if (moment().isBetween(moment(config.MemorySupervisor.ResetIntervalStart, "HH:mm a"), moment(config.MemorySupervisor.ResetIntervalEnd, "HH:mm a"))) {
                logging.Error('Program exit because is running out of memory');
                setTimeout(function () {
                    process.exit();
                }, 1500, 'funky');
            }
        }
    }
}, config.MemorySupervisor.Tick);

process.on('uncaughtException', function (err) {
    logging.Error('Caught exception: ', err.message, err.stack);
});

function postBackupManual(url, data, callback) {

    const options = {
        headers: { 'Content-Type': 'application/json' },
        url: url,
        body: JSON.stringify(data)
    }

    request.post(options, async (error, response, body) => {
        callback(JSON.parse(body));
    }).on('error', (err) => {
        callback(err);
    });
}

function postBackupConfig(url, data, callback) {

    const options = {
        headers: { 'Content-Type': 'application/json' },
        url: url,
        body: JSON.stringify(data)
    }

    request.post(options, async (error, response, body) => {
        callback(JSON.parse(body));
    }).on('error', (err) => {
        callback(err);
    });
}


function getBackupLog(url, callback) {

    const options = {
        method: 'GET',
        uri: url
    };

    request(options, async (error, response, body) => {
        try {
            callback(JSON.parse(response.body));
        } catch (error) {
            callback(error);
        }
    }).on('error', (err) => {
        callback(err);
    });
}

function deleteBackupLog(url, data, callback) {
    const options = {
        headers: { 'Content-Type': 'application/json' },
        url: url,
        body: JSON.stringify(data)
    }

    request.post(options, async (error, response, body) => {
        callback(JSON.parse(body));
    }).on('error', (err) => {
        callback(err);
    });
}