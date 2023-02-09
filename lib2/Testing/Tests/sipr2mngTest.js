const mod = require('../../srv/lib/sipr2mng');
const dbutil = require("../../srv/lib/dbasync");
const logger = require("../../srv/lib/logger.js").createLogger();

async function test1 () {

    try {
        var data = await mod.GetSync();
        logger.Info("SIPR2DATA => ", data);
    }
    catch(error){
        logger.Error(error);
    }
}
exports.test = async () => {
    dbutil.dbconfig = {
        host: "127.0.0.1",
        user: "root",
        password: "cd40",
        database: "ug5kv2",
        port: 3306,
        multipleStatements: true    
    };
    test1();    
};
