var HttpRequest = require('request');
var config = require(global.debug ? '../configUlises-dev.json' : '../configUlises.json');
var logger = require('./nu-log.js');

function RequestPromise(options){
    var promise = new Promise((resolve, reject)=>{
        HttpRequest(options, (err, res, body) => {
            logger.Trace('HttpRequest ', options, ' Response => ', err, res, response);
            if (err) {
                logger.Error('HttpRequest ', options, ' Error => ', err);
                reject(err);
            }
            else {
                if (res.statusCode==200 || res.statusCode==201){
                    var response = JSON.parse(body);
                    resolve(response);    
                }
                else{
                    reject({code: "HttpError", code: res.statusCode, message: `Http Error ${res.statusCode}, ${res.statusMessage}`});
                }
            }
        });    
    });
    return promise;
}

async function makeRequest(options){
    try {
        var res = await RequestPromise(options);
        if (global.debug)
            res.resultado="OK";
        return res;
    }
    catch(error){
        if (global.debug)
            error.resultado =`Error => ${error.message}`;
        return error;
    }
}

exports.get = async (url) => {
    const options = {
        url: url,
        method: 'GET',
        timeout: config.Ulises.timeout
    };
    return await makeRequest(options);
};

exports.post = async (url, data) => {
    const options = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        timeout: config.Ulises.timeout
    };
    return await makeRequest(options);
};