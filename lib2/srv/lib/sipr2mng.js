const dbutil = require("./dbasync");

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

exports.GetSync = async () => {
    var data = {};
    var dba = dbutil.makeDbAsync();
    await dbutil.dbTransaction(dba, async () => {
        var tableexist = false;
        try{
            await dba.query("select * from " + tablename + ";")
            tableexist = true;
        }
        catch(error){
            if (error.code !== errTableExist)
                throw error;
        }
        if (tableexist == false) {
            await dba.query(queryCreate);
            for (const data of  defaultData){
                var values = "(" + data.respSIP + ", " + data.respATSR2 + ");";
                await dba.query(queryInsert + values);
            }
        }
        data = await dba.query(queryData);    
    });
    return data;
};