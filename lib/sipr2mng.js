var db = require("./ug5kdb.js");

const tablename = "sipr2";
const queryCreate = "create table " + tablename + " (respSIP int, respATSR2 int);"
const queryData = "select * from " + tablename + ";"
const queryInsert = "insert INTO " + tablename + " VALUES ";
var errTableExist = "ER_NO_SUCH_TABLE";
const r2 = {
    Busy: 3,
    OutOfservice: 5,
    Free: 6,
    Congestion: 8,
    Release: 10,
    Blocking: 11,
};
var defaultData = [
    {respSIP: 404, respATSR2: r2.OutOfservice},
    {respSIP: 486, respATSR2: r2.Busy},
    {respSIP: 402, respATSR2: r2.Blocking}
];

function Get(response) {
    db.Query("select * from " + tablename + ";", {}, (error)=>{
        if (error != null) {
            if (error.code == errTableExist) {
                // Crear la Tabla.
                db.Query(queryCreate,{}, (error)=>{
                    if (error==null) {
                        // Insertar los valores por defecto.
                        defaultData.forEach(data => {
                            var values = "(" + data.respSIP + ", " + data.respATSR2 + ");";
                            db.Query(queryInsert + values, null, (error)=>{
                                if (error) {
                                    response({error: true, data: "Error " + error.code + " al insertar en la tabla " + tablename});
                                }
                            });
                        });                    
                        // Devuelve la tabla por defecto
                        response({error: false, data: defaultData});
                    }
                    else {
                        // Error al Crear la tabla.
                        response({error: true, data: "Error " + error.code + " al crear la tabla " + tablename});
                    }
                });
            }
            else {
                // Error en la base de datos.
                response({error: true, data: "Error al acceder a la base de datos => " + error.code});
            }
        }
        else {
            // Leer los datos.
            db.Query(queryData,{}, (error, rows) => {
                if (error == null) {
                    var data = []
                    rows.forEach(row=>{
                        data.push({respSIP: row.respSIP, respATSR2: row.respATSR2});
                    });
                    response({error: false, data: data});
                }
                else {
                    // Error al leer la tabla.
                    response({error: true, data: "Error " + error.code + " al leer tabla " + tablename});
                }
            });
        }
    });
}

async function GetSync() {
    var Promise = new Promise((resolve)=>{
        Get((data)=>{
            resolve (data);
        });
    });
    return await Promise;
}

exports.Get=Get;
exports.GetSync=GetSync;