const http_client = require('../../srv/lib/httpclient');
const logger = require('../../srv/lib/logger').createLogger();

exports.test = async () =>{
    try {
        var res = await http_client.get("http://192.169.0.1/tests");
        logger.Info("Get Error => ", res);
    }
    catch(error){
        logger.Error("Error => ", error);
    }
}