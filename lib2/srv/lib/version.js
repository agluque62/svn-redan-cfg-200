var config = require('../configUlises.json');
var fs = require('fs');
var crypto = require('crypto');
var util = require('util');
const logger = require("../../srv/lib/logger.js").createLogger();

function calculateMD5Checksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}

function formatDate(dateTime) {
    return dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear();
}

function getDatafromFile(fileName, filePath) {
    var baseDirectory = process.cwd();
    //var baseDirectory = base.substring(0,base.lastIndexOf('/'));
    var fileLocation = baseDirectory + filePath + fileName;

    if (!fs.lstatSync(fileLocation).isDirectory()) {
        var myFile = new Object();
        const stats = fs.statSync(fileLocation);
        const fileSizeInBytes = stats.size;
        var data = fs.readFileSync(fileLocation);
        var md5sum = calculateMD5Checksum(data);
        var mtime = new Date(util.inspect(stats.mtime));

        myFile.fileSizeInBytes = fileSizeInBytes;
        myFile.md5 = md5sum;
        myFile.date = formatDate(mtime);

        return myFile;
    }
}
exports.getAsync = async (files) => {
    return await new Promise(
        function (resolve, reject) {

            var fileArray = files===undefined ? config.Ulises.Files : files;

            for (var i = 0; i < fileArray.length; i++) {
                try {
                    var result = new Object();
                    result = getDatafromFile(fileArray[i].Name, fileArray[i].Path);
                    fileArray[i].fileSizeInBytes = result.fileSizeInBytes;
                    fileArray[i].md5 = result.md5;
                    fileArray[i].date = result.date;    
                }
                catch(error){
                    logger.Error("Error on analysis of version data: ", error);
                    fileArray[i].fileSizeInBytes = 0;
                    fileArray[i].md5 = "Error on analysis";
                    fileArray[i].date = "Error on analysis";    
                }
            }
            var ret =
            {
                file: fileArray,
                version: config.Ulises.Version,
                subversion: config.Ulises.SubVersion,
                date: config.Ulises.Date,
                nodejsversion: config.Ulises.NodeJS,
                mysqlversion: config.Ulises.MySQL,
                R16Mode: config.Ulises.R16Mode
            };
            resolve(ret);
    });
};

