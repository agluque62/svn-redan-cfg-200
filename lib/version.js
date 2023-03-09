const ug5kdb = require('./ug5kdb.js');
var config = require('../configUlises.json');
var fs = require('fs');
var crypto = require('crypto');
var util = require('util');

function calculateMD5Checksum(str, algorithm, encoding) {
    return crypto
        .createHash(algorithm || 'md5')
        .update(str, 'utf8')
        .digest(encoding || 'hex');
}

function formatDate(dateTime) {

    // var dateTime = dateTime.toString().split(" ");

    // var year = dateTime[3];
    // var month = dateTime[1];
    // var day = dateTime[2];
    // var time = dateTime[4];

    // return (day+'/'+month+'/'+year+' '+time);

    return dateTime.getDate() + '/' + (dateTime.getMonth() + 1) + '/' + dateTime.getFullYear();
}

const BackendFiles = () => {
    if (config.Ulises && config.Ulises.BackendFiles)
        return config.Ulises.BackendFiles;
    return [
        { "Path": "/", "Name": "app.js"},
        { "Path": "/lib/", "Name": "ug5kdb.js"},
        { "Path": "/lib/", "Name": "configurations.js"},
        { "Path": "/lib/", "Name": "externalResources.js" },
        { "Path": "/lib/", "Name": "gateways.js" },
        { "Path": "/lib/", "Name": "get_cfg_report.js" },
        { "Path": "/lib/", "Name": "hardware.js"},
        { "Path": "/lib/", "Name": "historics.js" },
        { "Path": "/lib/", "Name": "resources.js" },
        { "Path": "/lib/", "Name": "sites.js" },
        { "Path": "/lib/", "Name": "tableBss.js" },
        { "Path": "/lib/", "Name": "users.js" }
      ];
}
const FrontendFiles = () => {
    if (config.Ulises && config.Ulises.FrontendFiles)
        return config.Ulises.FrontendFiles;
    return [
        { "Path": "/frontend/", "Name": "main.js"},
        { "Path": "/frontend/", "Name": "runtime.js"},
        { "Path": "/frontend/", "Name": "components-home-home-module.js"},
        { "Path": "/frontend/", "Name": "vendor.js"}
      ];
}
function getDatafromFile(fileName, filePath) {
    var baseDirectory = process.cwd();
    //var baseDirectory = base.substring(0,base.lastIndexOf('/'));
    var fileLocation = baseDirectory + filePath + fileName;

    try {
        const stats = fs.statSync(fileLocation);
        const fileSizeInBytes = stats.size;
        var data = fs.readFileSync(fileLocation);
        var md5sum = calculateMD5Checksum(data);
        var mtime = new Date(util.inspect(stats.mtime));
        return {fileSizeInBytes: fileSizeInBytes, md5: md5sum, date: formatDate(mtime)};        
    } catch (error) {
        return {fileSizeInBytes: '???', md5: '???', date: `Error ${error}`};
    }
}

exports.getVersion = async  (cb) => {

    var mysqlVersion = await ug5kdb.version();
    var BackendData = [];
    var FrontendData= [];
    // BackendData.push({Path: '', Name: 'BACKEND', fileSizeInBytes: '', date: '', md5: ''});
    for (var item of BackendFiles()){
        var data = getDatafromFile(item.Name, item.Path);
        BackendData.push({Path: item.Path, Name: item.Name, fileSizeInBytes: data.fileSizeInBytes, 
            date: data.date, md5: data.md5})
    }
    // BackendData.push({Path: '', Name: 'FRONTEND', fileSizeInBytes: '', date: '', md5: ''});
    for (var item of FrontendFiles()) {
        var data = getDatafromFile(item.Name, item.Path);
        FrontendData.push({Path: item.Path, Name: item.Name, fileSizeInBytes: data.fileSizeInBytes, 
            date: data.date, md5: data.md5});
    }
    var ret =
    {
        file: BackendData,
        filef: FrontendData,
        version: config.Ulises.Version,
        subversion: config.Ulises.SubVersion,
        date: config.Ulises.Date,
        nodejsversion: process.version,  // config.Ulises.NodeJS,
        mysqlversion: mysqlVersion, // config.Ulises.MySQL,
        R16Mode: config.Ulises.R16Mode,
        runtime: process.versions
    };
    cb(ret);
}

