const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;

const callerId = require('caller-id');
const path = require('path');

const gcfg = require('../configUlises.json');

var logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: gcfg.Ulises.log2con,
            silent: gcfg.Ulises.log2con == 'none' ? true : false,
            format: combine(
                colorize({ all: true }),
                timestamp({
                  format: 'hh:mm:ss',
                }),
                printf((info) => `[${info.timestamp}]: ${info.level} on ${info.caller} => ${info.message}`)
            )
        }),
        new winston.transports.File({
            level: gcfg.Ulises.log2file,
            filename: gcfg.Ulises.logfile_path,
            maxsize: gcfg.Ulises.logfile_sizefile,
            maxFiles: gcfg.Ulises.logfile_maxfiles,
            tailable: true,
            silent: gcfg.Ulises.log2file == 'none' ? true : false,
            format: combine(
                timestamp({
                  format: 'MM-DD hh:mm:ss.SSS',
                }),
                printf((info) => `${info.timestamp};${info.level};${info.caller};${info.message}`)
            )
        })
    ]
});

function log(level, caller, argc) {

	var firstArgument = 0;	
	if (argc.length > 1) {
		if (typeof argc[0] === "boolean") {
			if (argc[0]===false)
			{
				return;
			}
			firstArgument = 1;
		}
	}

	var msg = '';
	for (var i=firstArgument; i<argc.length; i++) {
        msg += (JSON.stringify(argc[i]) + ', ');
    }
    logger.log(level, { message: msg, caller: caller });
}

function callerInfo(caller){
    const pathParts = caller.filePath.split(path.sep); 
    const filename = pathParts.length > 0 ? pathParts[pathParts.length-1]:"";
    const info = "[" + filename + "," + caller.lineNumber + "]";
    return info;
}

exports.Configure = function(cfg) {
    // Para la consola.
    logger.transports[0].level = cfg.log2con;
    logger.transports[0].silent = cfg.log2con == 'none' ? true : false;

    // Para el faichero
    logger.transports[1].level = cfg.log2file;
    logger.transports[1].silent = cfg.log2file == 'none' ? true : false;
};

exports.Error = function _Error(){
	log('error', callerInfo(callerId.getData()), arguments);
};

exports.Info = function _Info() {
	log('info', callerInfo(callerId.getData()), arguments);
};

exports.Trace = function _Trace(){
	log('silly', callerInfo(callerId.getData()), arguments);
};
