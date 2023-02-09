const http_client = require('../../srv/lib/httpclient');
const logger = require('../../srv/lib/logger').createLogger();

exports.test = async () =>{
    try {
        var res = await http_client.get("http://localhost:3000/config");
        logger.Info("Get data => ", res);
        res = await http_client.post("http://localhost:3000/backup", {saludo:'hola'});
        logger.Info("Post data => ", res);
        var res = await http_client.get("http://192.169.0.1/config", 5000);
    }
    catch(error){
        logger.Error("Error => ", error);
    }
}