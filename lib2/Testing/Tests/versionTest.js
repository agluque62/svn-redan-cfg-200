const version = require('../../srv/lib/version');
const logger = require("../../srv/lib/logger.js").createLogger();

exports.test = async () => {
    try {
        var data = await version.getAsync([
            {
                "Name": "index.js",
                "Path": "/",
                "fileSizeInBytes": 0,
                "md5": "",
                "date": ""
              },
              {
                "Path": "/",
                "Name": "package.json",
                "fileSizeInBytes": 0,
                "md5": "",
                "date": ""
              }
        ]);
        logger.Info("SIPR2DATA => ", data);

        var data = await version.getAsync();
        logger.Info("SIPR2DATA => ", data);
    }
    catch(error){
        logger.Error(error);
    }
};