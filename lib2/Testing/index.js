
var dbutils = require('../srv/lib/dbasync');
// require("./Tests/loggerTests").ExecuteTest();
// require('./Tests/dbAsyncTest').ExecuteTest();
// require('./Tests/authenticationTests').Test(); TODO
// require('./Tests/httpclientTests').test();
// require('./Tests/sipr2mngTest').test();
// require('./Tests/versionTest').test();
// require('./Tests/Get_Cfg_ReportTests').test();
require('./Tests/ExternalEqTest').test();

var dbAccessTemplate = async () => {
    var res = {};
    var db = dbutils.makeDbAsync();
    await dbutils.dbTransaction(db, async () =>{
    }); 
    return res;
}
