const UnderTest = require('../../srv/lib/get_cfg_report');
const logger = require("../../srv/lib/logger.js").createLogger();

exports.test = async ()=>{
    try {
        var data = await UnderTest.CfgReport(3);
        logger.Info("OK for Cfg 3");
        await UnderTest.CfgReport(10);
        logger.Info("OK for Cfg 10");
        await UnderTest.CfgReport(560);
        logger.Info("OK for Cfg 560???");
    }
    catch(error){
        logger.Error(error);
    }
};
