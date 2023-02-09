var request = require('request');
const logger = require('../../srv/lib/logger').createLogger();

function RequestPromise(options){
    return new Promise((resolve, reject)=>{
        request(options, (err, res, body) => {
            logger.Trace('HttpRequest ', options, ' Response => ', err, res, response);
            if (err) {
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
}
exports.get = async (url, timeout) => {
    const options = {
        url: url,
        method: 'GET',
        timeout: timeout===undefined ? 1000 : timeout
    };
    return await RequestPromise(options);
};
exports.post = async (url, data, timeout) => {
    const options = {
        url: url,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        timeout: timeout===undefined ? 1000 : timeout
    };
    return await RequestPromise(options);
};
