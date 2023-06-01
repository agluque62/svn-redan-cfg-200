var async = require('async');
var logging = require('./nu-log.js');

/** AGL */
var gcfg = require('../configUlises.json');
var ug5kdb = require('./ug5kdb.js');


var jsonTemplate = require('./jsonTemplate');
const { query } = require('express');


/********************************************************/
/*	FUNCTION: delRadioResource 							*/
/*	DESCRIPTION: Delete radio resource (all items 		*/
/*		associate on cascade will be deleted too)		*/
/*  PARAMS: idResource: resourceId 						*/
/*			res: result			 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.delRadioResource = function delRadioResource(resourceId, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
		host: gcfg.Ulises.dbhost,
		user: gcfg.Ulises.dbuser,
		password: gcfg.Ulises.dbpassword,
		database: gcfg.Ulises.dbdatabase
	});*/
    var activa = 0;
    var id_pasarela = 0;
    connection.connect(function (err) {
        if (err) {
            logging.Trace("Error connention to 'U5K-G' database.");
            return;
        }
        else {

            var selQuery = connection.query('SELECT c.activa,p.idpasarela ' +
                'FROM recursos_radio rr ' +
                'LEFT JOIN pasarelas p ON rr.pasarela_id=p.idpasarela ' +
                'LEFT JOIN emplazamientos e ON p.emplazamiento_id=e.idemplazamiento ' +
                'LEFT JOIN configuraciones c ON e.configuracion_id=c.idconfiguracion ' +
                'WHERE rr.idrecurso_radio=?', [resourceId],
                function (err, rows) {
                    if (err) {
                        connection.end();
                        return f({ error: err.message });
                    }
                    else {
                        activa = rows[0].activa;
                        id_pasarela = rows[0].idpasarela;
                        var delQuery = connection.query('DELETE FROM recursos_radio WHERE idrecurso_radio=?', [resourceId],
                            function (err, rows) {
                                logging.Trace(delQuery.sql);
                                if (err) {
                                    connection.end();
                                    return f({ error: err.message });
                                }
                                else {
                                    updatePasarela(id_pasarela);

                                    var strQuery = connection.query(
                                        'SELECT configuraciones.idconfiguracion, configuraciones.activa FROM configuraciones ' +
                                        'LEFT JOIN emplazamientos ON configuraciones.idconfiguracion = emplazamientos.configuracion_id ' +
                                        'LEFT JOIN pasarelas ON pasarelas.emplazamiento_id=emplazamientos.idemplazamiento ' +
                                        'WHERE pasarelas.idpasarela=?', [id_pasarela], function (err, rows) {
                                            var configId = rows[0].idconfiguracion;

                                            if (err) {
                                                connection.end();
                                                return f({ error: 'Error en consulta: ' + strQuery + err });
                                            }

                                            var strQuery = connection.query(
                                                'UPDATE configuraciones SET fecha_activacion=UTC_TIMESTAMP() WHERE idconfiguracion=?', [configId],
                                                function (err, rows) {
                                                    connection.end();

                                                    if (err) {
                                                        return f({ error: 'Error en consulta: ' + strQuery + err });
                                                    }
                                                    return f({ data: 'OK', activa: activa });
                                                }
                                            )
                                        }
                                    );
                                }
                            });
                    }
                });
        }
    });
};

/********************************************************/
/*	FUNCTION: delRadioResource 							*/
/*	DESCRIPTION: Delete radio resource (all items 		*/
/*		associate on cascade will be deleted too)		*/
/*  PARAMS: idResource: resourceId 						*/
/*			res: result			 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.delPhoneResource = async function delPhoneResource(resourceId, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
		host: gcfg.Ulises.dbhost,
		user: gcfg.Ulises.dbuser,
		password: gcfg.Ulises.dbpassword,
		database: gcfg.Ulises.dbdatabase
	});*/
    var activa = 0;
    var id_pasarela = 0;
    connection.connect(function (err) {
        if (err) {
            logging.Trace("Error connention to 'U5K-G' database.");
            return;
        }
        else {

            var selQuery = connection.query('SELECT c.activa,p.idpasarela ' +
                'FROM recursos_telefono rt ' +
                'LEFT JOIN pasarelas p ON rt.pasarela_id=p.idpasarela ' +
                'LEFT JOIN emplazamientos e ON p.emplazamiento_id=e.idemplazamiento ' +
                'LEFT JOIN configuraciones c ON e.configuracion_id=c.idconfiguracion ' +
                'WHERE rt.idrecurso_telefono=?', [resourceId],
                function (err, rows) {
                    if (err) {
                        connection.end();
                        return f({ error: err.message });
                    }
                    else {

                        activa = rows[0].activa;
                        id_pasarela = rows[0].idpasarela;
                        var delQuery = connection.query('DELETE FROM recursos_telefono WHERE idrecurso_telefono=?', [resourceId],
                            function (err, rows) {

                                logging.Trace(delQuery.sql);
                                if (err) {
                                    connection.end();
                                    return f({ error: err.message });
                                }
                                else {
                                    updatePasarela(id_pasarela);

                                    var strQuery = connection.query(
                                        'SELECT configuraciones.idconfiguracion, configuraciones.activa FROM configuraciones ' +
                                        'LEFT JOIN emplazamientos ON configuraciones.idconfiguracion = emplazamientos.configuracion_id ' +
                                        'LEFT JOIN pasarelas ON pasarelas.emplazamiento_id=emplazamientos.idemplazamiento ' +
                                        'WHERE pasarelas.idpasarela=?', [id_pasarela], function (err, rows) {
                                            var configId = rows[0].idconfiguracion;

                                            if (err) {
                                                connection.end();
                                                return f({ error: 'Error en consulta: ' + strQuery + err });
                                            }

                                            var strQuery = connection.query(
                                                'UPDATE configuraciones SET fecha_activacion=UTC_TIMESTAMP() WHERE idconfiguracion=?', [configId],
                                                function (err, rows) {
                                                    connection.end();

                                                    if (err) {
                                                        return f({ error: 'Error en consulta: ' + strQuery + err });
                                                    }
                                                    return f({ data: 'OK', activa: activa });
                                                }
                                            )
                                        }
                                    );
                                }
                            });
                    }
                });
        }
    });
};

/********************************************************/
/*	FUNCTION: delRadioResource 							*/
/*	DESCRIPTION: Update cgw when a resource is deleted 	*/
/*		activating update_pending flag					*/
/*  PARAMS: idResource: id_pasarela 					*/
/*								 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
function updatePasarela(id_pasarela) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/
    connection.connect(function (err) {
        if (err) {
            logging.Trace("Error connention to 'U5K-G' database.");
            return;
        }
        else {

            var updateQuery = connection.query('UPDATE pasarelas p ' +
                'SET p.pendiente_actualizar=1 ' +
                'WHERE p.idpasarela=?', [id_pasarela],
                function (err, result) {
                    logging.Trace(updateQuery.sql);
                    connection.end();
                });
        }
    });
}

/****************************/
/*	FUNCTION: getResources 	*/
/*  PARAMS: 				*/
/****************************/
exports.getResources = function getResources(f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT * FROM RECURSO', function (err, rows, fields) {

                if (err || rows.length == 0) {
                    connection.end();
                    return f(err ? err : 'NO_DATA');
                }

                connection.end();
                logging.Trace(query.sql);
                f({ error: err, recursos: rows });
            });
        }
    });
};

exports.getFreeResources = function getFreeResources(f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT r.* FROM recurso r ' +
                'LEFT JOIN colateral c ON c.RECURSO_idRECURSO=r.idRECURSO ' +
                'WHERE c.RECURSO_idRECURSO IS NULL', function (err, rows, fields) {

                    if (err || rows.length == 0) {
                        connection.end();
                        return f(err ? err : 'NO_DATA');
                    }

                    connection.end();
                    logging.Trace(query.sql);
                    f({ error: err, recursos: rows });
                });
        }
    });
};

exports.getResource = function getResource(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {



            var query = connection.query('SELECT * FROM (' +
                'SELECT r.*,true as blanca, u.*, d.name as frecuencia, d.idDESTINOS as idDESTINOS FROM RECURSO R ' +
                'LEFT JOIN listablanca lb on lb.RECURSO_idRECURSO=r.idRECURSO ' +
                'LEFT JOIN urilistas u ON u.idURILISTAS = lb.URILISTAS_idURILISTAS ' +
                'LEFT JOIN colateral c ON c.RECURSO_idRECURSO = r.idRECURSO ' +
                'LEFT JOIN destinos d ON d.idDESTINOS = c.DESTINOS_idDESTINOS ' +
                'WHERE idRECURSO=? ' +
                'UNION ' +
                'SELECT r.*,false as blanca, u.*,d.name as frecuencia, d.idDESTINOS as idDESTINOS FROM RECURSO R ' +
                'LEFT JOIN listanegra ln on ln.RECURSO_idRECURSO=r.idRECURSO ' +
                'LEFT JOIN urilistas u ON u.idURILISTAS = ln.URILISTAS_idURILISTAS ' +
                'LEFT JOIN colateral c ON c.RECURSO_idRECURSO = r.idRECURSO ' +
                'LEFT JOIN destinos d ON d.idDESTINOS = c.DESTINOS_idDESTINOS ' +
                'WHERE idRECURSO=?) a ORDER BY a.ip', [rsc, rsc], function (err, rows, fields) {

                    if (err || rows.length == 0) {
                        connection.end();
                        return f(err ? err : 'NO_DATA');
                    }

                    connection.end();
                    logging.Trace(query.sql);
                    f({ recursos: rows });
                });
        }
    });
};

exports.postResource = function postResource(resource, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('INSERT INTO RECURSO SET ?', resource, function (err, result) {

                if (err) {
                    connection.end();
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return f({ error: err, data: null });
                }

                connection.end();
                logging.Trace(query.sql);
                f({ error: null, data: resource });
            });
        }
    });
};

exports.putResource = function putResource(resource, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('UPDATE RECURSO SET ? WHERE idRECURSO=?', [resource.rsc, resource.rsc.idRECURSO], function (err, result) {

                if (err) {
                    connection.end();
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return f({ error: err, data: null });
                }

                connection.end();
                logging.Trace(query.sql);
                f({ error: null, data: resource });
            });
        }
    });
};

exports.delResource = function delResource(idPos, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            // Eliminar un recurso supone eliminar la posicion en la slave...
            // Con la foreign key ON_DELETE: CASCADE, se elimina el recurso.
            // Y solo se eliminan si no forman  parte de la configuración activa
            /*
            var query = connection.query('DELETE FROM pos WHERE idPOS=? AND ' +
                                            '(? NOT IN (SELECT POS_idPOS from (SELECT POS_idPOS FROM recurso r ' +
                                            'INNER JOIN pos p ON p.idPOS=r.POS_idPOS ' +
                                            'INNER JOIN hardware h ON h.SLAVES_idSLAVES=p.SLAVES_idSLAVES ' +
                                            'INNER JOIN cgw_cfg c ON (c.CGW_idCGW=h.CGW_idCGW AND c.activa) ' +
                                                ') as derived))', [idPos,idPos], function(err, result) {
            */
            // Se permite eliminar recursos que forman  parte de la configuración activa (Incidencia #1200)
            var query = connection.query('DELETE FROM pos WHERE idPOS=?', idPos, function (err, result) {
                if (err) {
                    connection.end();
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return f({ error: err, data: null });
                }

                connection.end();
                f({ error: null, data: result.affectedRows });
            });
        }
    });
};


/*************************************************/
/***** getRadioParameters	**********************/
/*************************************************/
exports.getRadioParameters = function getRadioParameters(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.parallel({
                Buffer_jitter: function (callback) {
                    var query = connection.query('SELECT * FROM jitter ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idJITTER;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                hardware: function (callback) {
                    var query = connection.query('SELECT * FROM paramhw ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idPARAMHW;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                radio: function (callback) {
                    var query = connection.query('SELECT * FROM paramradio ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idPARAMRADIO;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                tablaAudio: function (callback) {
                    var query = connection.query('SELECT tb.idtabla_bss,tb.name FROM tabla_bss tb ' +
                        'INNER JOIN tabla_bss_recurso tbr ON tbr.tabla_bss_idtabla_bss = tb.idtabla_bss ' +
                        'WHERE tbr.recurso_idrecurso=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, { idtabla_bss: '', name: '' });
                        });
                },
                valoresTablaAudio: function (callback) {
                    var query = connection.query('SELECT vt.valor_rssi FROM valores_tabla vt ' +
                        'INNER JOIN tabla_bss_recurso tbr ON tbr.tabla_bss_idtabla_bss = vt.tabla_bss_idtabla_bss ' +
                        'WHERE tbr.recurso_idrecurso=? ORDER BY vt.valor_prop', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                callback(null, rows);
                            }
                            else
                                callback(null, []);
                        });
                }
            }, function (err, results) {
                connection.end();

                f({ error: err, parametros: results });
            });
        }
    });
};

/*************************************************/
/****** postRadioParameters 	******************/
/*************************************************/
exports.postRadioParameters = function postRadioParameters(resource, params, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.series({
                delete: function (callback) {
                    async.parallel({
                        delRadio: function (callback) {
                            var query = connection.query('DELETE FROM paramradio WHERE RECURSO_idRECURSO=?', resource, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        delHw: function (callback) {
                            var query = connection.query('DELETE FROM paramhw WHERE RECURSO_idRECURSO=?', resource, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        delJitter: function (callback) {
                            var query = connection.query('DELETE FROM jitter WHERE RECURSO_idRECURSO=?', resource, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        delTablaAudio: function (callback) {
                            if (params.tAudio != null) {
                                var query = connection.query('DELETE FROM tabla_bss_recurso WHERE RECURSO_idRECURSO=?', resource, function (err, result) {
                                    if (err) {
                                        logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                        return callback(err);
                                    }

                                    logging.Trace(query.sql);
                                    callback();
                                });
                            }
                            else
                                callback();
                        }
                    }, callback);
                },
                insert: function (callback) {
                    async.parallel({
                        insRadio: function (callback) {
                            delete params.rd.tabla_indices_calidad;
                            // var tipo = typeof params.rd.iPrecisionAudio;
                            // if (tipo == "string")
                            // 	params.rd.iPrecisionAudio = parseInt(params.rd.iPrecisionAudio);

                            //Se eliminan los siguientes campos pues se mandan por compatibilidad
                            //de version de la pasarela Ulises
                            delete params.rd.FrqTonoSQ;
                            delete params.rd.UmbralTonoSQ;
                            delete params.rd.FrqTonoPTT;
                            delete params.rd.UmbralTonoPTT;
                            delete params.rd.SupervPortadoraTx;
                            delete params.rd.SupervModuladoraTx;


                            var query = connection.query('INSERT INTO paramradio SET ?', params.rd, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insHw: function (callback) {
                            var query = connection.query('INSERT INTO paramhw SET ?', params.hw, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insJitter: function (callback) {
                            var query = connection.query('INSERT INTO jitter SET ?', params.jt, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insTablaAudio: function (callback) {
                            if (params.tAudio != null && params.tAudio != "-1") {
                                var query = connection.query('INSERT INTO tabla_bss_recurso SET ?', { recurso_idrecurso: resource, tabla_bss_idtabla_bss: params.tAudio }, function (err, result) {
                                    if (err) {
                                        logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                        return callback(err);
                                    }

                                    logging.Trace(query.sql);
                                    callback();
                                });
                            }
                            else
                                callback();
                        }
                    }, callback);
                }
            },
                function (err) {
                    connection.end();

                    if (err)
                        f({ error: err, data: params });
                    else
                        f({ error: null, data: params });
                }
            );
        }
    });
};

/*************************************************/
/*********	PARAMETROS TELEFONÍA	**************/
/********* getTelephoneParameters	**************/
/*************************************************/
exports.getTelephoneParameters = function getTelephoneParameters(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.parallel({
                Buffer_jitter: function (callback) {
                    var query = connection.query('SELECT * FROM jitter ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idJITTER;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                hardware: function (callback) {
                    var query = connection.query('SELECT * FROM paramhw ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idPARAMHW;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                telefonia: function (callback) {
                    var query = connection.query('SELECT * FROM paramtelef ' +
                        'WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0) {
                                delete rows[0].idPARAMTELEF;
                                delete rows[0].RECURSO_idRECURSO;
                                callback(null, rows[0]);
                            }
                            else
                                callback(null, {});
                        });
                },
                ats_rangos_dst: function (callback) {
                    var query = connection.query('SELECT inicial,final FROM rangos r ' +
                        'LEFT JOIN paramtelef pt ON pt.idPARAMTELEF=r.PARAMTELEF_idPARAMTELEF ' +
                        'WHERE !r.origen AND pt.RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0)
                                callback(null, rows);
                            else
                                callback(null, []);
                        });
                },
                ats_rangos_org: function (callback) {
                    var query = connection.query('SELECT inicial,final FROM rangos r ' +
                        'LEFT JOIN paramtelef pt ON pt.idPARAMTELEF=r.PARAMTELEF_idPARAMTELEF ' +
                        'WHERE r.origen AND pt.RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            if (rows != null && rows.length > 0)
                                callback(null, rows);
                            else
                                callback(null, []);
                        });
                }
            }, function (err, results) {
                connection.end();

                f({ error: err, parametros: results });
            });
        }
    });
};

/*************************************************/
/****** postTelephoneParameters	******************/
/*************************************************/
exports.postTelephoneParameters = function postTelephoneParameters(resource, params, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT * FROM paramtelef WHERE RECURSO_idRECURSO=?', resource, function (err, rows, fields) {
                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return callback(err);
                }

                logging.Trace(query.sql);
                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return callback(err);
                }

                if (rows != null && rows.length > 0) {

                    params.tf.idPARAMTELEF = rows[0].idPARAMTELEF;

                    // PUT
                    async.parallel({
                        insRadio: function (callback) {
                            //Se eliminan los siguientes campos pues son de la version ulises, no se usan en REDAN
                            delete params.tf.idRed;
                            delete params.tf.idTroncal;
                            delete params.tf.listaEnlacesInternos;
                            delete params.tf.ats_rangos_operador;
                            delete params.tf.ats_rangos_privilegiados;
                            delete params.tf.ats_rangos_directos_ope;
                            delete params.tf.ats_rangos_directos_pri;

                            var tipo = typeof params.tf.iT_Int_Warning;
                            if (tipo == "string")
                                params.tf.iT_Int_Warning = parseInt(params.tf.iT_Int_Warning);

                            var query = connection.query('UPDATE paramtelef SET ? WHERE RECURSO_idRECURSO=?', [params.tf, resource], function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insHw: function (callback) {
                            var query = connection.query('UPDATE paramhw SET ? WHERE RECURSO_idRECURSO=?', [params.hw, resource], function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insJitter: function (callback) {
                            var query = connection.query('UPDATE jitter SET ? WHERE RECURSO_idRECURSO=?', [params.jt, resource], function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        }
                    }, function (err) {
                        connection.end();

                        if (err)
                            f({ error: err, data: params });
                        else
                            f({ error: null, data: params });
                    });
                } else {
                    // POST
                    async.parallel({
                        insRadio: function (callback) {
                            var query = connection.query('INSERT INTO paramtelef SET ?', params.tf, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                params.tf.idPARAMTELEF = result.insertId;

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insHw: function (callback) {
                            var query = connection.query('INSERT INTO paramhw SET ?', params.hw, function (err, result) {
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }

                                logging.Trace(query.sql);
                                callback();
                            });
                        },
                        insJitter: function (callback) {
                            if (params.jt != null && params.jt != "-1")
                                var query = connection.query('INSERT INTO jitter SET ?', params.jt, function (err, result) {
                                    if (err) {
                                        logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                        return callback(err);
                                    }

                                    logging.Trace(query.sql);
                                    callback();
                                });
                        }
                    }, function (err) {
                        connection.end();

                        if (err)
                            f({ error: err, data: params });
                        else
                            f({ error: null, data: params });
                    });
                }
            });
        }
    });
};
/********************************************************/
/*	FUNCTION: getRangeAts 								*/
/*	DESCRIPTION: Get ats ranges 						*/
/*  PARAMS: rsc: resId 									*/
/*			f: callback function 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.getRangeAts = function getRangeAts(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {

            //Metemos el alias y el id para mantener la compatibilidad al mostrar los datos en la tabla del cliente
            //ShowRangeAts(data); en hardware.js
            var query = connection.query('SELECT rango_ats_inicial as inicial, rango_ats_final as final, tipo ' +
                'FROM rangos_ats ' +
                'WHERE recurso_telefonico_id=?', [rsc],
                function (err, rows) {
                    logging.Trace(query.sql);
                    connection.end();

                    if (err || rows.length == 0) {
                        return f(err ? err : 'NO_DATA');
                    }

                    f({ error: err, ranks: rows });
                });
        }
    });
};

/********************************************************/
/*	FUNCTION: getRadioWBList 							*/
/*	DESCRIPTION: Get Black and White Lists				*/
/*  PARAMS: rsc: resId 									*/
/*			f: callback function 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.getRadioWBList = function getRadioWBList(rsc, listType, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {

            //Metemos el alias y el id para mantener la compatibilidad al mostrar los datos en la tabla del cliente
            //ShowRangeAts(data); en hardware.js
            var query = connection.query('SELECT uri,tipo ' +
                'FROM lista_uris ' +
                'WHERE recurso_radio_id=?', [rsc],
                function (err, rows) {
                    logging.Trace(query.sql);
                    connection.end();

                    if (err || rows.length == 0) {
                        return f(err ? err : 'NO_DATA');
                    }
                    else
                        return f({ error: null, list: rows });
                });
        }
    });
};

exports.getRangeAtsByParam = function getRangeAtsByParam(idParam, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT * FROM rangos ' +
                'WHERE PARAMTELEF_idPARAMTELEF=?', idParam, function (err, rows, fields) {

                    logging.Trace(query.sql);
                    connection.end();

                    if (err || rows.length == 0) {
                        return f(null);
                    }

                    f(rows[0].PARAMTELEF_idPARAMTELEF);
                });
        }
    });
};

exports.postRangeAts = function postRangeAts(rsc, range, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.waterfall([
                // Select idParamTelef
                function (callback) {
                    var query = connection.query('SELECT idPARAMTELEF FROM paramtelef WHERE RECURSO_idRECURSO=?', rsc, function (err, rows, fields) {
                        logging.Trace(query.sql);

                        if (err || rows.length == 0)
                            return callback(err);

                        if (rows.length > 0) {
                            return callback(null, rows[0].idPARAMTELEF);
                        }
                    });
                },
                // Insert Rank
                function (idParam, callback) {
                    var query = connection.query('INSERT INTO rangos SET PARAMTELEF_idPARAMTELEF=?,origen=?,inicial=?,final=?', [idParam, range.origen, range.inicial, range.final], function (err, result) {
                        logging.Trace(query.sql);

                        if (err) {
                            logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                            return callback(err);
                        }

                        callback();
                    });
                }
            ], function (err) {
                connection.end();

                if (err)
                    return f({ error: err, data: null });

                f({ error: null, data: range });
            });
        }
    });
};

exports.putRangeAts = function putRangeAts(range, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('UPDATE rangos SET ? ' +
                'WHERE idRangos=?', [range, range.idRangos], function (err, result) {

                    logging.Trace(query.sql);
                    connection.end();

                    if (err) {
                        logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                        return f({ error: err, ranks: range });
                    }

                    f({ error: err, ranks: range });
                });
        }
    });
};

exports.deleteRangeAts = function deleteRangeAts(range, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('DELETE FROM rangos WHERE idRangos=?', range, function (err, result) {

                logging.Trace(query.sql);
                connection.end();

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return f({ error: err, ranks: range });
                }

                f({ error: err, ranks: range });
            });
        }
    });
};

exports.getUriList = function getUriList(f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT * FROM URILISTAS', function (err, rows, fields) {
                connection.end();
                logging.Trace(query.sql);
                if (err || rows.length == 0) {
                    return f(err ? err : 'NO_DATA');
                }

                f({ error: err, uris: rows });
            });
        }
    });
};


exports.getAssignedUriList = function getAssignedUriList(resource, tipolista, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {

            if (tipolista == 1) { //lista negra
                var query = connection.query('SELECT U.idURILISTAS, U.ip FROM ug5k.urilistas U ' +
                    'WHERE U.idURILISTAS not in (SELECT L.URILISTAS_idURILISTAS FROM ug5k.listanegra L WHERE L.RECURSO_idRECURSO=?)',
                    resource, function (err, rows, fields) {
                        connection.end();
                        logging.Trace(query.sql);
                        if (err || rows.length == 0) {
                            return f(err ? err : 'NO_DATA');
                        }
                        f({ error: err, uris: rows });
                    });
            }
            else {
                if (tipolista == 2) { //lista blanca
                    query = connection.query('SELECT U.idURILISTAS, U.ip FROM ug5k.urilistas U ' +
                        'WHERE U.idURILISTAS not in (SELECT L.URILISTAS_idURILISTAS FROM ug5k.listablanca L WHERE L.RECURSO_idRECURSO=?)',
                        resource, function (err, rows, fields) {
                            connection.end();
                            logging.Trace(query.sql);
                            if (err || rows.length == 0) {
                                return f(err ? err : 'NO_DATA');
                            }

                            f({ error: err, uris: rows });
                        });
                }
            }
        }
    });
};

exports.postUriList = function postUriList(uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('INSERT INTO URILISTAS SET ?', uri, function (err, result) {
                logging.Trace(query.sql);

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: err, data: null });
                }

                connection.end();
                logging.Trace(query.sql);
                f({ error: null, data: result.insertId });
            });
        }
    });
};

exports.deleteUriList = function deleteUriList(uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('DELETE FROM URILISTAS WHERE ?', uri, function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    return f({ error: err, data: null });
                }

                logging.Trace(query.sql);
                f({ error: null, data: uri });

                connection.end();
            });
        }
    });
};

exports.getListsFromResource = function getListsFromResource(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT u.idURILISTAS, u.ip, 1 as negra FROM URILISTAS u INNER JOIN listanegra ln ON ln.URILISTAS_idURILISTAS=u.idURILISTAS ' +
                'WHERE ln.RECURSO_idRECURSO=? ' +
                'UNION ' +
                'SELECT u.idURILISTAS, u.ip, 0 as negra FROM URILISTAS u INNER JOIN listablanca lb ON lb.URILISTAS_idURILISTAS=u.idURILISTAS ' +
                'WHERE lb.RECURSO_idRECURSO=?', [rsc, rsc], function (err, rows, fields) {
                    connection.end();
                    logging.Trace(query.sql);
                    if (err || rows.length == 0) {
                        return f(err ? err : 'NO_DATA');
                    }

                    f({ error: err, uris: rows });
                });
        }
    });
};

exports.postUriToResource = function postUriToResource(rsc, uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.parallel({
                listablanca: function (callback) {
                    var query = '';
                    if (uri.white) {
                        query = connection.query('INSERT INTO LISTABLANCA SET ?', { RECURSO_idRECURSO: rsc, URILISTAS_idURILISTAS: uri.idURILISTAS }, function (err, result) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            callback();
                        });
                    }
                    else
                        callback();
                },
                listanegra: function (callback) {
                    var query = '';
                    if (uri.black) {
                        query = connection.query('INSERT INTO LISTANEGRA SET ?', { RECURSO_idRECURSO: rsc, URILISTAS_idURILISTAS: uri.idURILISTAS }, function (err, result) {
                            logging.Trace(query.sql);
                            if (err) {
                                logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                return callback(err);
                            }

                            callback();
                        });
                    }
                    else
                        callback();
                }
            },
                function (err) {
                    connection.end();

                    if (err)
                        f({ error: err, data: null });
                    else
                        f({ error: null, data: uri });
                }
            );
        }
    });
};

exports.deleteUriToResource = function deleteUriToResource(rsc, uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            async.parallel({
                listablanca: function (callback) {
                    if (uri.white) {
                        var query = '';
                        query = connection.query('DELETE FROM LISTABLANCA WHERE RECURSO_idRECURSO=? AND ' +
                            'URILISTAS_idURILISTAS=?', [rsc, uri.idURILISTAS], function (err, result) {
                                logging.Trace(query.sql);
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }
                            });
                    }
                    callback();
                },
                listanegra: function (callback) {
                    if (uri.black) {
                        var query = '';
                        query = connection.query('DELETE FROM LISTANEGRA WHERE RECURSO_idRECURSO=? AND ' +
                            'URILISTAS_idURILISTAS=?', [rsc, uri.idURILISTAS], function (err, result) {
                                logging.Trace(query.sql);
                                if (err) {
                                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                                    return callback(err);
                                }
                            });
                    }
                    callback();
                }
            },
                function (err) {
                    connection.end();

                    if (err)
                        f({ error: err, data: null });
                    else
                        f({ error: null, data: uri });
                }
            );
        }
    });
};

exports.getUriByIp = function getUriByIp(ip, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT * FROM URILISTAS WHERE ip=?', ip, function (err, rows, fields) {
                connection.end();
                logging.Trace(query.sql);
                if (err || rows.length == 0) {
                    return f(null);
                }


                f(rows[0]);
            });
        }
    });
};

/********************************************************/
/*	FUNCTION: getHardware 								*/
/*	DESCRIPTION: Get gateway hardware configuration 	*/
/*  PARAMS: gtw: gatewayIp 								*/
/*			f: callback function 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.getResourceUriList = function getResourceUriList(rscId, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('SELECT tipo, uri,nivel_colateral FROM lista_uris WHERE recurso_radio_id=?',
                [rscId], function (err, rows) {
                    if (err || rows.length == 0) {
                        connection.end();
                        return f({ error: (err ? err : 'NO_DATA'), uris: null });
                    }
                    connection.end();
                    logging.Trace(query.sql);
                    f({ error: err, uris: rows });
                });
        }
    });
};

exports.postResourceUris = function postResourceUris(uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('INSERT INTO ubicaciones SET ?', uri, function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: (err ? err : 'NO_DATA'), uris: null });
                }

                logging.Trace(query.sql);
                f({ error: err, uris: uri });

                connection.end();
            });
        }
    });
};

exports.putResourceUris = function putResourceUris(uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('UPDATE ubicaciones SET ? WHERE idUBICACIONES=?', [uri, uri.idUBICACIONES], function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: (err ? err : 'NO_DATA'), uris: null });
                }

                logging.Trace(query.sql);
                f({ error: err, uris: uri });

                connection.end();
            });
        }
    });
};

exports.deleteUrisBelongingResource = function deleteUrisBelongingResource(rsc, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('DELETE FROM ubicaciones WHERE RECURSO_idRECURSO=?', rsc, function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: (err ? err : 'NO_DATA'), uris: null });
                }

                logging.Trace(query.sql);
                f({ error: err, uris: '' });

                connection.end();
            });
        }
    });
};

exports.postResourceUris = function postResourceUris(uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('INSERT INTO ubicaciones SET ?', uri, function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: (err ? err : 'NO_DATA'), uris: null });
                }

                logging.Trace(query.sql);
                f({ error: err, uris: uri });

                connection.end();
            });
        }
    });
};

exports.deleteResourceUri = function deleteResourceUri(rsc, uri, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var query = connection.query('DELETE FROM ubicaciones WHERE idUBICACIONES=? AND RECURSO_idRECURSO=?', [uri, rsc], function (err, result) {

                if (err) {
                    logging.Error("SQL: " + query.sql + "\nERROR: " + err.message);
                    connection.end();
                    return f({ error: (err ? err : 'NO_DATA'), uris: null });
                }

                logging.Trace(query.sql);
                f({ error: err, uris: null });

                connection.end();
            });
        }
    });
};

/********************************************************/
/*	FUNCTION: getRemoteRadioResources 					*/
/*	DESCRIPTION: Delete radio resource (all items 		*/
/*		associate on cascade will be deleted too)		*/
/*  PARAMS: idResource: resourceId 						*/
/*			res: result			 						*/
/*  REV 1.0.2 VMG										*/
/********************************************************/
exports.getRemoteRadioResources = function getRemoteRadioResources(cfg, site, gtw, resId, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {

            var query = '';
            if (cfg != "null") {
                query = connection.query('SELECT idemplazamiento, nombre as eName ' +
                    'FROM emplazamientos ' +
                    'WHERE configuracion_id=?', [cfg],
                    function (err, result) {
                        logging.Trace(query.sql);
                        connection.end();
                        if (err || result.length == 0) {
                            return f({ error: (err ? err : 'NO_DATA'), data: null });
                        }
                        else {
                            logging.Trace(query.sql);
                            return f({ error: err, data: result });
                        }
                    });
            }
            if (site != "null") {
                query = connection.query('SELECT idpasarela, nombre as gName ' +
                    'FROM pasarelas ' +
                    'WHERE emplazamiento_id=?', [site],
                    function (err, result) {
                        logging.Trace(query.sql);
                        connection.end();
                        if (err || result.length == 0) {
                            return f({ error: (err ? err : 'NO_DATA'), data: null });
                        }
                        else {
                            logging.Trace(query.sql);
                            return f({ error: err, data: result });
                        }
                    });
            }
            if (gtw != "null") {
                query = connection.query('SELECT rr.nombre as rName, p.ip_virtual as gIpv, p.puerto_sip ' +
                    'FROM recursos_radio rr ' +
                    'RIGHT JOIN pasarelas p ON rr.pasarela_id=p.idpasarela ' +
                    'WHERE pasarela_id = ?' +
                    'AND tipo_agente >= 4 ' +
                    'AND idrecurso_radio <> ?', [gtw, resId],
                    function (err, result) {
                        logging.Trace(query.sql);
                        connection.end();
                        if (err || result.length == 0) {
                            return f({ error: (err ? err : 'NO_DATA'), data: null });
                        }
                        else {
                            logging.Trace(query.sql);
                            return f({ error: err, data: result });
                        }
                    });
            }
        }
    });
    /*if (cfg == "null")
        select='SELECT cf.name as cfName,e.name as eName,c.name as gName, r.name as rName,c.ipv as gIpv FROM recurso r ' +
                                    'INNER JOIN paramradio pr on pr.tipo >=4 AND pr.RECURSO_idRECURSO = r.idRECURSO ' +
                                    'INNER JOIN pos p ON p.idPOS=r.POS_idPOS ' +
                                    'INNER JOIN hardware h ON h.SLAVES_idSLAVES=p.SLAVES_idSLAVES ' +
                                    'INNER JOIN cgw c ON c.idCGW=h.CGW_idCGW ' +
                                    'INNER JOIN emplazamiento e ON e.idEMPLAZAMIENTO=c.EMPLAZAMIENTO_idEMPLAZAMIENTO ' +
                                    'INNER JOIN cfg cf ON cf.idCFG=e.CFG_idCFG ' +
                                    'ORDER BY cfName,eName,gName';
    else if (site == "null")
        select='SELECT cf.name as cfName,e.name as eName,c.name as gName, r.name as rName,c.ipv as gIpv FROM recurso r ' +
                                    'INNER JOIN paramradio pr on pr.tipo >=4 AND pr.RECURSO_idRECURSO = r.idRECURSO ' +
                                    'INNER JOIN pos p ON p.idPOS=r.POS_idPOS ' +
                                    'INNER JOIN hardware h ON h.SLAVES_idSLAVES=p.SLAVES_idSLAVES ' +
                                    'INNER JOIN cgw c ON c.idCGW=h.CGW_idCGW ' +
                                    'INNER JOIN emplazamiento e ON e.idEMPLAZAMIENTO=c.EMPLAZAMIENTO_idEMPLAZAMIENTO ' +
                                    'INNER JOIN cfg cf ON cf.idCFG=e.CFG_idCFG ' +
                                    'WHERE cf.name=\'' + cfg + '\' ' +
                                    'ORDER BY cfName,eName,gName';
    else if (gtw == "null")
        select='SELECT cf.name as cfName,e.name as eName,c.name as gName, r.name as rName,c.ipv as gIpv FROM recurso r ' +
                                    'INNER JOIN paramradio pr on pr.tipo >=4 AND pr.RECURSO_idRECURSO = r.idRECURSO ' +
                                    'INNER JOIN pos p ON p.idPOS=r.POS_idPOS ' +
                                    'INNER JOIN hardware h ON h.SLAVES_idSLAVES=p.SLAVES_idSLAVES ' +
                                    'INNER JOIN cgw c ON c.idCGW=h.CGW_idCGW ' +
                                    'INNER JOIN emplazamiento e ON e.idEMPLAZAMIENTO=c.EMPLAZAMIENTO_idEMPLAZAMIENTO ' +
                                    'INNER JOIN cfg cf ON cf.idCFG=e.CFG_idCFG ' +
                                    'WHERE cf.name=\'' + cfg + '\' AND e.name=\'' + site + '\' ' +
                                    'ORDER BY cfName,eName,gName';
    else
        select='SELECT cf.name as cfName,e.name as eName,c.name as gName, r.name as rName,c.ipv as gIpv FROM recurso r ' +
                                    'INNER JOIN paramradio pr on pr.tipo >=4 AND pr.RECURSO_idRECURSO = r.idRECURSO ' +
                                    'INNER JOIN pos p ON p.idPOS=r.POS_idPOS ' +
                                    'INNER JOIN hardware h ON h.SLAVES_idSLAVES=p.SLAVES_idSLAVES ' +
                                    'INNER JOIN cgw c ON c.idCGW=h.CGW_idCGW ' +
                                    'INNER JOIN emplazamiento e ON e.idEMPLAZAMIENTO=c.EMPLAZAMIENTO_idEMPLAZAMIENTO ' +
                                    'INNER JOIN cfg cf ON cf.idCFG=e.CFG_idCFG ' +
                                    'WHERE cf.name=\'' + cfg + '\' AND e.name=\'' + site + '\' AND c.name=\'' + gtw + '\' ' +
                                    'ORDER BY cfName,eName,gName';


/*		query = connection.query(select,  function(err, rows, fields) {
        connection.end();	

        if (err || rows.length == 0){
            return f({error: (err ? err : 'NO_DATA'), data: null});
        }

        logging.Trace(query.sql);
        f({error: err, data: rows});
    });
}
});*/
};

/****************************************/
/*	FUNCTION: getTelephonicResources	*/
/*  PARAMS: cfg: idSourceConfig			*/
/*			site: site id				*/
/*			gtw: gtw id 	 			*/
/*			f: callback 	 			*/
/*										*/
/*  REV 1.0.2 VMG						*/
/****************************************/
exports.getTelephonicResources = function getTelephonicResources(cfg, site, gtw, radioId, f) {
    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        }
        else {


            var select = '';
            if (gtw == "null")
                select = 'SELECT p.idpasarela,c.nombre as cfName,e.nombre as eName,p.nombre as gName,' +
                    'r.nombre as rName,p.ip_virtual as gIpv, r.tipo_interfaz_tel ' +
                    'FROM pasarelas p ' +
                    'LEFT JOIN emplazamientos e ON p.emplazamiento_id=e.idemplazamiento ' +
                    'LEFT JOIN configuraciones c ON e.configuracion_id=c.idconfiguracion ' +
                    'RIGHT JOIN recursos_telefono r ON p.idpasarela=r.pasarela_id ' +
                    'WHERE p.emplazamiento_id=' + site;
            else
                select = 'SELECT p.idpasarela,c.nombre as cfName,e.nombre as eName,p.nombre as gName,' +
                    'r.nombre as rName,p.ip_virtual as gIpv, r.tipo_interfaz_tel ' +
                    'FROM pasarelas p ' +
                    'LEFT JOIN emplazamientos e ON p.emplazamiento_id=e.idemplazamiento ' +
                    'LEFT JOIN configuraciones c ON e.configuracion_id=c.idconfiguracion ' +
                    'RIGHT JOIN recursos_telefono r ON p.idpasarela=r.pasarela_id ' +
                    'WHERE p.idpasarela=' + gtw + ' AND r.idrecurso_telefono NOT LIKE ' + radioId;


            let query = connection.query(select, function (err, rows, fields) {
                connection.end();

                if (err || rows.length == 0) {
                    return f({ error: (err ? err : 'NO_DATA'), data: null });
                }

                logging.Trace(query.sql);
                f({ error: err, data: rows });
            });
        }
    });
};

/****************************************/
/*	FUNCTION: getResourceById       	*/
/*  PARAMS: idRS: id_resource			*/
/*						            	*/
/*  REV 1.0.2 VMG						*/
/****************************************/

exports.getTelefonicResourceById = function getResourceById(idRs, f) {

    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {

        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        } else {
            let recurso = jsonTemplate.fillRadioResource();

            var selectResource = function (callback) {
                if (idRs != null) {

                    let query = connection.query('SELECT rt.idrecurso_telefono,rt.nombre,rt.columna,rt.fila, rt.codec,rt.clave_registro,' +
                        'rt.ajuste_ad,rt.ajuste_da,rt.tipo_interfaz_tel,rt.lado,rt.respuesta_automatica,rt.origen_test,rt.destino_test, ' +
                        'rt.periodo_tonos,rt.uri_telefonica,rt.deteccion_vox,rt.umbral_vox,rt.cola_vox,rt.supervisa_colateral,rt.tiempo_supervision, ' +
                        'rt.duracion_tono_interrup, rt.ats_user, rt.det_inversion_pol, ' +
                        /** 20200710. Nuevo parametro para lineas telefonicas **/
                        'rt.iDetLineaAB, rt.iEnableNoED137, rt.itiporespuesta, rt.additional_uri_remota, rt.additional_superv_options, rt.additional_itiporespuesta,' +
                        /** 20221019. Nuevo parametro para linea telefonica **/
                        'rt.llamada_automatica, rt.iControlTmLlam, rt.iTmMaxConversacion, rt.RespuestaSIP_ATSR2, rt.TmTonoBloqueo, TmBloqueoLib, p.ip_virtual ' +
                        'FROM recursos_telefono as rt ' +
                        'INNER JOIN pasarelas p ON p.idpasarela = rt.pasarela_id ' +
                        'WHERE rt.idrecurso_telefono =?', [idRs],
                        function (err, rows) {
                            if (err) {
                                logging.Error(err);
                                connection.end();
                                return f({ error: err.message });
                            } else {
                                let recurso = jsonTemplate.fillTelResource();
                                recurso.idDBRadio = '-1';
                                recurso.idDBTfno = rows[0].idrecurso_telefono;
                                recurso.IdRecurso = rows[0].nombre;
                                recurso.SlotPasarela = rows[0].columna;
                                recurso.NumDispositivoSlot = rows[0].fila;
                                recurso.Codec = rows[0].codec;


                                if (rows[0].clave_registro == null) {
                                    recurso.szClave = '';
                                    recurso.enableRegistro = 0;
                                }
                                else {
                                    recurso.szClave = rows[0].clave_registro;
                                    recurso.enableRegistro = 1;
                                }
                                if (rows[0].ajuste_ad == null) {
                                    recurso.hardware.AD_Gain = '';
                                    recurso.hardware.AD_AGC = 1;
                                }
                                else {
                                    recurso.hardware.AD_Gain = rows[0].ajuste_ad * 10;//Al mandarlo a las pasarelas hay que multiplicarlo
                                    recurso.hardware.AD_AGC = 0;
                                }
                                if (rows[0].ajuste_da == null) {
                                    recurso.hardware.DA_Gain = '';
                                    recurso.hardware.DA_AGC = 1;
                                }
                                else {
                                    recurso.hardware.DA_Gain = rows[0].ajuste_da * 10;//Al mandarlo a las pasarelas hay que multiplicarlo
                                    recurso.hardware.DA_AGC = 0;
                                }
                                recurso.telefonia.tipo = rows[0].tipo_interfaz_tel;
                                recurso.telefonia.lado = rows[0].lado;
                                recurso.telefonia.r_automatica = rows[0].respuesta_automatica;
                                recurso.telefonia.no_test_local = rows[0].origen_test;
                                recurso.telefonia.no_test_remoto = rows[0].destino_test;
                                recurso.telefonia.it_release = rows[0].periodo_tonos;
                                recurso.telefonia.uri_remota = rows[0].uri_telefonica;
                                recurso.telefonia.detect_vox = rows[0].deteccion_vox;
                                recurso.telefonia.umbral_vox = rows[0].umbral_vox;
                                recurso.telefonia.tm_inactividad = rows[0].cola_vox;
                                recurso.telefonia.superv_options = rows[0].supervisa_colateral;
                                recurso.telefonia.tm_superv_options = rows[0].tiempo_supervision;
                                recurso.telefonia.iT_Int_Warning = rows[0].duracion_tono_interrup;
                                recurso.telefonia.ats_user = rows[0].ats_user;

                                /** 20190212. Ajuste URI-LOCAL segun tipo.. */
                                var UserUri = recurso.telefonia.ats_user == "" ? rows[0].nombre : recurso.telefonia.ats_user;
                                recurso.Uri_Local = 'sip:' + UserUri + '@' + rows[0].ip_virtual;

                                recurso.telefonia.iDetInversionPol = rows[0].det_inversion_pol;
                                /** 20200710. NUevos Parámetros para lineas telefonicas */
                                recurso.telefonia.iDetLineaAB = rows[0].iDetLineaAB;
                                recurso.telefonia.iEnableNoED137 = rows[0].iEnableNoED137;
                                recurso.telefonia.itiporespuesta = rows[0].itiporespuesta;
                                recurso.telefonia.additional_uri_remota = rows[0].additional_uri_remota;
                                recurso.telefonia.additional_superv_options = rows[0].additional_superv_options;
                                recurso.telefonia.additional_itiporespuesta = rows[0].additional_itiporespuesta;

                                /** 20221019. Nuevo parametro para linea telefonica */
                                recurso.LlamadaAutomatica= rows[0].llamada_automatica;
                                recurso.telefonia.iControlTmLlam = rows[0].iControlTmLlam;
                                recurso.telefonia.iTmMaxConversacion = rows[0].iTmMaxConversacion;
                                recurso.telefonia.RespuestaSIP_ATSR2 = rows[0].RespuestaSIP_ATSR2;
                                recurso.telefonia.TmTonoBloqueo = rows[0].TmTonoBloqueo;
                                recurso.telefonia.TmBloqueoLib = rows[0].TmBloqueoLib;

                                return callback(null, idRs, recurso)
                            }
                        })
                }
            }
            var selectListaRangosAts = function /*selectListaRangosAts*/(idRs, recurso, callback) {
                var query = connection.query('SELECT rt.idrecurso_telefono,ra.rango_ats_inicial, ' +
                    'ra.rango_ats_final,ra.tipo ' +
                    'FROM recursos_telefono rt ' +
                    'LEFT JOIN rangos_ats ra ON rt.idrecurso_telefono=ra.recurso_telefonico_id ' +
                    'WHERE rt.idrecurso_telefono=?', [idRs],
                    function (err, rows) {
                        if (err) {
                            logging.Error(err);
                            return callback(rows.length == 0 ? 'NO_DATA' : err);
                        } else {
                            var rangosDstCounter = 0;
                            var rangosOrgCounter = 0;
                            for (var i = 0; i < rows.length; i++) {
                                if (rows[i].idrecurso_telefono == recurso.idDBTfno) {
                                    if (rows[i].tipo == 0) {
                                        recurso.telefonia.ats_rangos_org[rangosOrgCounter].inicial = rows[i].rango_ats_inicial;
                                        recurso.telefonia.ats_rangos_org[rangosOrgCounter].final = rows[i].rango_ats_final;
                                        rangosOrgCounter++;
                                    }
                                    if (rows[i].tipo == 1) {
                                        recurso.telefonia.ats_rangos_dst[rangosDstCounter].inicial = rows[i].rango_ats_inicial;
                                        recurso.telefonia.ats_rangos_dst[rangosDstCounter].final = rows[i].rango_ats_final;
                                        rangosDstCounter++;
                                    }
                                }
                            }
                        }
                        return callback(null, recurso);
                    }
                );
            };
            async.waterfall([
                selectResource,
                selectListaRangosAts,
            ], function (err, result) {
                connection.end();
                f(result, idRs);
            });

        }
    })
}


exports.getRadioResourceById = function getRadioResourceById(idRs, f) {

    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();/* mysql.createConnection({
        host: gcfg.Ulises.dbhost,
        user: gcfg.Ulises.dbuser,
        password: gcfg.Ulises.dbpassword,
        database: gcfg.Ulises.dbdatabase
    });*/

    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        } else {
            let recurso = jsonTemplate.fillRadioResource();

            var selectResource = function (callback) {
                if (idRs != null) {
                    let query = connection.query('SELECT rr.idrecurso_radio,rr.nombre,rr.columna,rr.fila,rr.codec,rr.clave_registro,rr.ajuste_ad, ' +
                        'rr.ajuste_da,rr.min_jitter,rr.max_jitter,rr.tipo_agente,rr.indicacion_entrada_audio,rr.indicacion_salida_audio, ' +
                        'rr.climax_bss,rr.metodo_bss,rr.umbral_vad,rr.tiempo_max_ptt,rr.ventana_bss,rr.tipo_climax,rr.retardo_fijo_climax, ' +
                        'rr.cola_bss_sqh,rr.evento_ptt_squelch,rr.retardo_jitter,rr.retraso_interno_grs,rr.habilita_grabacion,' +
                        'rr.tabla_bss_id,rr.prioridad_sesion_sip,rr.prioridad_ptt,' +
                        'rr.frecuencia,rr.precision_audio,rr.metodo_climax,rr.restriccion_entrantes, p.ip_virtual ' +
                        'FROM recursos_radio as rr ' +
                        'INNER JOIN pasarelas p ON p.idpasarela = rr.pasarela_id ' +
                        'WHERE rr.idrecurso_radio = ?', [idRs],
                        function (err, rows) {
                            console.log(rows)
                            if (err) {
                                logging.Error(err);
                                connection.end();
                                return f({ error: err.message });
                            } else {
                                recurso.idDBRadio = rows[0].idrecurso_radio;
                                recurso.idDBTfno = '-1';
                                recurso.idBss = rows[0].tabla_bss_id;
                                recurso.IdRecurso = rows[0].nombre;
                                recurso.SlotPasarela = rows[0].columna;
                                recurso.NumDispositivoSlot = rows[0].fila;
                                recurso.Codec = rows[0].codec;


                                /** 20190212. Ajuste URI-LOCAL segun tipo.. */
                                recurso.Uri_Local = 'sip:' + rows[0].nombre + '@' + rows[0].ip_virtual;
                                if (rows[0].clave_registro == null) {
                                    recurso.szClave = '';
                                    recurso.enableRegistro = 0;
                                }
                                else {
                                    recurso.szClave = rows[0].clave_registro;
                                    recurso.enableRegistro = 1;
                                }
                                if (rows[0].ajuste_ad == null) {
                                    recurso.hardware.AD_Gain = '';
                                    recurso.hardware.AD_AGC = 1;
                                }
                                else {
                                    recurso.hardware.AD_Gain = rows[0].ajuste_ad * 10;//Al mandarlo a las pasarelas hay que multiplicarlo
                                    recurso.hardware.AD_AGC = 0;
                                }
                                if (rows[0].ajuste_da == null) {
                                    recurso.hardware.DA_Gain = '';
                                    recurso.hardware.DA_AGC = 1;
                                }
                                else {
                                    recurso.hardware.DA_Gain = rows[0].ajuste_da * 10;//Al mandarlo a las pasarelas hay que multiplicarlo
                                    recurso.hardware.DA_AGC = 0;
                                }
                                recurso.Buffer_jitter.min = rows[0].min_jitter;
                                recurso.Buffer_jitter.max = rows[0].max_jitter;
                                recurso.radio.tipo = rows[0].tipo_agente;
                                recurso.radio.sq = rows[0].indicacion_entrada_audio;
                                recurso.radio.ptt = rows[0].indicacion_salida_audio;
                                recurso.radio.bss = rows[0].climax_bss;
                                recurso.radio.metodoBss = rows[0].metodo_bss;
                                recurso.radio.umbralVad = rows[0].umbral_vad;
                                recurso.radio.tiempoPtt = rows[0].tiempo_max_ptt;
                                recurso.radio.climaxDelay = rows[0].tipo_climax;
                                recurso.radio.tmRetardoFijo = rows[0].retardo_fijo_climax;
                                recurso.radio.retrasoSqOff = rows[0].cola_bss_sqh;
                                recurso.radio.evtPTT = rows[0].evento_ptt_squelch;
                                recurso.radio.tjbd = rows[0].retardo_jitter;
                                recurso.radio.tGRSid = rows[0].retraso_interno_grs;
                                recurso.radio.iEnableGI = rows[0].habilita_grabacion;
                                recurso.radio.iSesionPrio = rows[0].prioridad_sesion_sip;
                                recurso.radio.iPttPrio = rows[0].prioridad_ptt;
                                /** 20210412. Cuando el FID==0, hay que pasar un blanco.*/
                                recurso.radio.colateral.name = rows[0].frecuencia == 0.0 ? "" : rows[0].frecuencia.toFixed(3);
                                recurso.radio.iPrecisionAudio = rows[0].precision_audio;
                                recurso.radio.iModoCalculoClimax = rows[0].metodo_climax;
                                recurso.restriccion = rows[0].restriccion_entrantes;
                                recurso.radio.tmVentanaRx = rows[0].ventana_bss;

                                return callback(null, idRs, recurso)
                            }
                        })
                }
            }
        }

        var selectListaUris = function /*selectListaUris*/(idRs, recurso, callback) {
            var query = connection.query('SELECT rr.idrecurso_radio,lu.uri,lu.tipo,lu.nivel_colateral ' +
                'FROM recursos_radio rr ' +
                'LEFT JOIN lista_uris lu ON rr.idrecurso_radio=lu.recurso_radio_id ' +
                'WHERE rr.idrecurso_radio=?', [idRs],
                function (err, rows) {
                    if (err) {
                        logging.Error(err);
                        return callback(rows.length == 0 ? 'NO_DATA' : err);
                    }
                    else {
                        var blancaCounter = 0, negraCounter = 0;
                        for (var i = 0; i < rows.length; i++) {
                            var emplazamientosCounter = 0;
                            if (rows[i].idrecurso_radio == recurso.idDBRadio) {

                                if (rows[i].nivel_colateral == 1 || rows[i].nivel_colateral == 2)
                                    emplazamientosCounter = 0;
                                else if (rows[i].nivel_colateral == 3 || rows[i].nivel_colateral == 4)
                                    emplazamientosCounter = 1;
                                else
                                    emplazamientosCounter = 2;

                                var item = rows[i];
                                var IsRadio = !(item.tipo == 'LSB' || item.tipo == 'LSN');
                                if (IsRadio == true) {
                                    var IsTx = item.tipo == 'TXA' || item.tipo == 'TXB' || item.tipo == 'TX';
                                    var IsRx = item.tipo == 'RXA' || item.tipo == 'RXB' || item.tipo == 'RX';
                                    var IsA = item.tipo == 'TXA' || item.tipo == 'RXA' || (item.nivel_colateral % 2) == 1;
                                    var IsB = item.tipo == 'TXB' || item.tipo == 'RXB' || (item.nivel_colateral % 2) == 0;
                                    if (IsTx) {
                                        if (IsA) {
                                            recurso.radio.colateral.emplazamientos[emplazamientosCounter].uriTxA = rows[i].uri;
                                        } else if (IsB) {
                                            recurso.radio.colateral.emplazamientos[emplazamientosCounter].uriTxB = rows[i].uri;
                                        } else {
                                            logging.Error('Error URI Radio-TX Description', item);
                                        }
                                    } else if (IsRx) {
                                        if (IsA) {
                                            recurso.radio.colateral.emplazamientos[emplazamientosCounter].uriRxA = rows[i].uri;
                                        } else if (IsB) {
                                            recurso.radio.colateral.emplazamientos[emplazamientosCounter].uriRxB = rows[i].uri;
                                        } else {
                                            logging.Error('Error URI Radio-RX Description', item);
                                        }
                                    } else {
                                        logging.Error('Error URI Radio-UKNOW Description', item);
                                    }
                                }
                                else {
                                    if (rows[i].tipo == 'LSB') {
                                        recurso.blanca[blancaCounter] = rows[i].uri;
                                        blancaCounter++;
                                    }
                                    else if (rows[i].tipo == 'LSN') {
                                        recurso.negra[negraCounter] = rows[i].uri;
                                        negraCounter++;
                                    }
                                    else {
                                        logging.Error('Error URI Phone Description', item);
                                    }
                                }
                            }
                        }
                        return callback(null, idRs, recurso);
                    }
                }
            );
        };
        var selectTablaBss = async function /*selectTablaBss*/(idRs, recurso, callback) {
            var query = '';
            recurso.idBss = recurso.idBss ? recurso.idBss : 0;
            if (recurso.Radio_o_Telefonia == 1 && (recurso.radio.tipo == 4 ||
                recurso.radio.tipo == 6) && recurso.idBss > 0) {

                console.log("Leyendo Tabla Bss", recurso.idBss);

                query = 'SELECT valor0,valor1,valor2,valor3,valor4,valor5 ' +
                    'FROM tablas_bss WHERE idtabla_bss=' + recurso.idBss + ';';
                res = await ug5kdb.QueryMultiInsertSync(query);
                if (res.error) {
                    logging.Error(res.error);
                }
                else {
                    recurso.radio.tabla_indices_calidad[0] = res.data[0].valor0;
                    recurso.radio.tabla_indices_calidad[1] = res.data[0].valor1;
                    recurso.radio.tabla_indices_calidad[2] = res.data[0].valor2;
                    recurso.radio.tabla_indices_calidad[3] = res.data[0].valor3;
                    recurso.radio.tabla_indices_calidad[4] = res.data[0].valor4;
                    recurso.radio.tabla_indices_calidad[5] = res.data[0].valor5;
                }
            }
            else {

            }
            return callback(null, recurso);
        };

        async.waterfall([
            selectResource,
            selectListaUris,
            selectTablaBss,
        ], function (err, result) {
            connection.end();
            f(result, idRs);
        });

    })
}

exports.postRadioResourceFromJsonFile = function postRadioResourceFromJsonFile(data, f) {

    var mysql = require('mysql');
    var connection = ug5kdb.GetDbConnection();

    let idRs;
    const resource = data.resource;
    const gtwId = data.gtwId;
    const row = data.row
    const column = data.column

    let adGain = (resource.hardware.AD_AGC === 1) ? null : parseFloat(resource.hardware.AD_Gain) / 10;
    let daGain = (resource.hardware.DA_AGC === 1) ? null : parseFloat(resource.hardware.DA_Gain) / 10;
    let frec = resource.radio.colateral.name === '' || resource.radio.colateral.name === undefined ? 0 : resource.radio.colateral.name




    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        } else {

            var importDataResource = function (callback) {
                var query = connection.query('INSERT INTO recursos_radio (pasarela_id,nombre,columna,fila, ' +
                    'codec,clave_registro,ajuste_ad, ajuste_da,min_jitter,max_jitter,tipo_agente, ' +
                    'indicacion_entrada_audio,indicacion_salida_audio,climax_bss,metodo_bss,umbral_vad, ' +
                    'tiempo_max_ptt,ventana_bss,tipo_climax,retardo_fijo_climax,' +
                    'cola_bss_sqh,evento_ptt_squelch,retardo_jitter,retraso_interno_grs,' +
                    'habilita_grabacion,tabla_bss_id,prioridad_sesion_sip,prioridad_ptt, ' +
                    'frecuencia,precision_audio,metodo_climax,restriccion_entrantes) ' +
                    'VALUES (?,?,?,?, ?,?,?,?,?,?,?, ?,?,?,?,?, ?,?,?,?, ?,?,?,?, ?,?,?,?, ?,?,?,?)',
                    [gtwId, resource.IdRecurso, column, row, 
                        resource.Codec, resource.clave_registro, adGain, daGain, resource.Buffer_jitter.min,
                        resource.Buffer_jitter.max, resource.radio.tipo, resource.radio.sq, resource.radio.ptt,
                        resource.radio.bss, resource.radio.metodoBss, resource.radio.umbralVad, resource.radio.tiempoPtt,
                        resource.radio.tmVentanaRx, resource.radio.climaxDelay, resource.radio.tmRetardoFijo,
                        resource.radio.retrasoSqOff, resource.radio.evtPTT, resource.radio.tjbd, resource.radio.tGRSid,
                        resource.radio.iEnableGI, resource.idBss, resource.radio.iSesionPrio, resource.radio.iPttPrio,
                        frec, resource.radio.iPrecisionAudio, resource.radio.iModoCalculoClimax,
                        resource.restriccion],
                    function (err, result) {
                        idRs = result.insertId
                        if (err) {
                            logging.Error(err);
                            connection.end();
                            callback(err);
                        }
                        idRs = result.insertId;
                        callback(null, idRs)
                    })
            }

            var importListUri = function (idRs, callback) {
                resource.negra.forEach(element => {
                    if (element !== '') {
                        var query = connection.query('INSERT INTO lista_uris (recurso_radio_id, uri, tipo, nivel_colateral)' +
                            'VALUES (?,?,?,?)', [idRs, element, 'LSN', 0], function (err, result) {
                                if (err) {
                                    logging.Trace('ERROR: ' + query.sql)
                                }
                            })
                    }
                })

                resource.blanca.forEach(element => {
                    if (element !== '') {
                        var query = connection.query('INSERT INTO lista_uris (recurso_radio_id, uri, tipo, nivel_colateral)' +
                            'VALUES (?,?,?,?)', [idRs, element, 'LSB', 0], function (err, result) {
                                if (err) {
                                    logging.Trace('ERROR: ' + query.sql)
                                }
                            })
                    }
                })

                return callback(null, idRs)
            }

            var importUris = function (idRs, callback) {
                resource.radio.colateral.emplazamientos.forEach(function (element, index) {
                    if (element.uriTxA !== "" || element.uriTxB !== "" || element.uriRxA !== "" || element.uriRxB !== "") {
                        let pos = (index + 1)
                        let uris = [
                            { uri: element.uriTxA, type: 'TXA', nivel_colateral: (pos + (pos - 1)) },
                            { uri: element.uriTxB, type: 'TXB', nivel_colateral: (pos + ((pos + 1) - 1)) },
                            { uri: element.uriRxA, type: 'RXA', nivel_colateral: (pos + (pos - 1)) },
                            { uri: element.uriRxB, type: 'RXB', nivel_colateral: (pos + ((pos + 1) - 1)) },
                        ]
                        uris.forEach(uri => {
                            if (uri.uri !== '') {
                                var query = connection.query('INSERT INTO lista_uris (recurso_radio_id, uri, tipo, nivel_colateral)' +
                                    'VALUES (?,?,?,?)', [idRs, uri.uri, uri.type, uri.nivel_colateral], function (err, result) {
                                        if (err) {
                                            logging.Trace('ERROR: ' + query.sql)
                                        }
                                    })
                            }
                        })

                    }
                })
                return callback(null)
            }
        }
        async.waterfall([
            importDataResource,
            importListUri,
            importUris
        ], function (err, result) {
            connection.end();
            f({ data: 'OK', result })
        })
    })





}

exports.postTlfResourceFromJsonFile = function postTlfResourceFromJsonFile(data, f) {

    let mysql = require('mysql');
    let connection = ug5kdb.GetDbConnection();

    const resource = data.resource;
    const gtwId = data.gtwId;
    const row = data.row
    const column = data.column;
    let idRs = 0;

    let ats_user = resource.telefonia.ats_user ? resource.telefonia.ats_user : "";
    let DetInversionPol = resource.telefonia.iDetInversionPol ? resource.telefonia.iDetInversionPol : 0;
    let iDetLineaAB = resource.telefonia.iDetLineaAB ? resource.telefonia.iDetLineaAB : 0;
    let iEnableNoED137 = resource.telefonia.iEnableNoED137 ? resource.telefonia.iEnableNoED137 : 0;
    let itiporespuesta = resource.telefonia.itiporespuesta ? resource.telefonia.itiporespuesta : 0;
    let additional_uri_remota = resource.telefonia.additional_uri_remota ? resource.telefonia.additional_uri_remota : "";
    let additional_superv_options = resource.telefonia.additional_superv_options ? resource.telefonia.additional_superv_options : 0;
    let additional_itiporespuesta = resource.telefonia.additional_itiporespuesta ? resource.telefonia.additional_itiporespuesta : 0;
    let adGain = (resource.hardware.AD_AGC == 1) ? null : parseFloat(resource.hardware.AD_Gain) / 10;
    let daGain = (resource.hardware.DA_AGC == 1) ? null : parseFloat(resource.hardware.DA_Gain) / 10;


    connection.connect(function (err) {
        if (err) {
            logging.Error("Error connection to 'U5K-G' database.");
        } else {
            var importDataResource = function (callback) {
                var query = connection.query('INSERT INTO recursos_telefono (pasarela_id,fila,columna,nombre,codec, ' +
                    'clave_registro,ajuste_ad,ajuste_da,precision_audio,tipo_interfaz_tel,deteccion_vox,umbral_vox,cola_vox, ' +
                    'respuesta_automatica,periodo_tonos,lado,origen_test,destino_test,supervisa_colateral,tiempo_supervision, ' +
                    'duracion_tono_interrup,uri_telefonica, ats_user, det_inversion_pol,iDetLineaAB, iEnableNoED137,itiporespuesta, ' +
                    'additional_uri_remota, additional_superv_options, additional_itiporespuesta, llamada_automatica,' +
                    'iTmMaxConversacion, iControlTmLlam, RespuestaSIP_ATSR2, TmTonoBloqueo, TmBloqueoLib) ' +
                    'VALUES (?,?,?,?,?, ?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?, ?,?,?,?,?,?,?, ?,?,?,?, ?,?,?,?,?)',
                    [gtwId, row, column, resource.IdRecurso, resource.Codec,
                        resource.szClave, adGain, daGain, 1, resource.telefonia.tipo, resource.telefonia.detect_vox,
                        resource.telefonia.umbral_vox, resource.telefonia.tm_inactividad,
                        resource.telefonia.r_automatica, resource.telefonia.it_release,
                        resource.telefonia.lado, resource.telefonia.no_test_local,
                        resource.telefonia.no_test_remoto, resource.telefonia.superv_options,
                        resource.telefonia.tm_superv_options, resource.telefonia.iT_Int_Warning,
                        resource.telefonia.uri_remota, ats_user, DetInversionPol, iDetLineaAB, iEnableNoED137,
                        itiporespuesta, additional_uri_remota, additional_superv_options, additional_itiporespuesta,
                        resource.LlamadaAutomatica,
                        resource.telefonia.iTmMaxConversacion, resource.telefonia.iControlTmLlam,
                        resource.telefonia.RespuestaSIP_ATSR2, resource.telefonia.TmTonoBloqueo,
                        resource.telefonia.TmBloqueoLib], function (err, result) {
                            if (err) {
                                logging.Error(err);
                                connection.end();
                                callback(err);
                            }
                            idRs = result.insertId;
                            callback(null, idRs)
                        }
                )
            }

            var importRangesATSDest = function (idRs, callback) {
                resource.telefonia.ats_rangos_dst.forEach(element => {
                    var query = connection.query('INSERT INTO rangos_ats (recurso_telefonico_id, rango_ats_inicial, rango_ats_final, tipo) ' +
                        'VALUES (?,?,?,?)',
                        [idRs, element.inicial, element.final, 1], function (err, result) {
                            if (err) {
                                logging.Trace('ERROR: ' + query.sql)
                            }
                        })
                });
                return callback(null, idRs)
            }

            var importRangesATSOrig = function (idRs, callback) {
                resource.telefonia.ats_rangos_org.forEach(element => {
                    var query = connection.query('INSERT INTO rangos_ats (recurso_telefonico_id, rango_ats_inicial, rango_ats_final, tipo) ' +
                        'VALUES (?,?,?,?)',
                        [idRs, element.inicial, element.final, 0], function (err, result) {
                            if (err) {
                                logging.Trace('ERROR: ' + query.sql)
                            }
                        })
                })
                return callback(null)

            }
        }

        async.waterfall([
            importDataResource,
            importRangesATSDest,
            importRangesATSOrig
        ], function (err, result) {
            connection.end()
            f({ data: 'OK', result })
        })

    })


}