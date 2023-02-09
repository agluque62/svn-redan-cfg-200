const winston = require('winston');
const { combine, timestamp, printf, colorize, align } = winston.format;
const callerId = require('caller-id');
const path = require('path');

function _data2log(log, caller, argc) {
	var firstArgument = 0;	
	if (argc.length > 1) {
		if (typeof argc[0] === "boolean") {
			if (argc[0]===false)
			{
				return;
			}
			firstArgument = 1;
		}
	}
	var msg = '';
	for (var i=firstArgument; i<argc.length; i++) {
        msg += (JSON.stringify(argc[i]) + ', ');
    }
    log({ message: msg, caller: caller });
}
function _callerInfo(caller){
    const pathParts = caller.filePath.split(path.sep); 
    const filename = pathParts.length > 0 ? pathParts[pathParts.length-1]:"";
    const info = "[" + filename + "," + caller.lineNumber + "]";
    return info;
}
exports.createLogger = (config) => {
    const cfg = config === undefined ? exports.defaults : config;
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({
                level: cfg.console.level,
                silent: cfg.console.enabled===false,
                format: combine(
                    colorize({ all: true }),
                    timestamp({
                      format: 'hh:mm:ss',
                    }),
                    printf((info) => `[${info.timestamp}]: ${info.level} on ${info.caller} => ${info.message}`)
                )
            }),
            new winston.transports.File({
                level: cfg.file.level,
                filename: cfg.file.name,
                maxsize: cfg.file.size,
                maxFiles: cfg.file.max,
                tailable: true,
                silent: cfg.file.enabled===false,
                format: combine(
                    timestamp({
                      format: 'MM-DD hh:mm:ss.SSS',
                    }),
                    printf((info) => `${info.timestamp};${info.level};${info.caller};${info.message}`)
                )
            })
        ]
    });
    return {
        Info(){
            _data2log((data)=>logger.log('info', data),_callerInfo(callerId.getData()), arguments);
        }, 
        Error(){
            _data2log((data)=>logger.log('error', data),_callerInfo(callerId.getData()), arguments);
        },
        Trace(){
            _data2log((data)=>logger.log('silly', data),_callerInfo(callerId.getData()), arguments);
        } 
    };
}
exports.defaults = {
    console: {
        enabled: true,
        level: "silly"
    },
    file: {
        enabled: true,
        levekl: "silly",
        name: "./logs/ug5kserv.csv",
        size: 1000000,
        max: 4
    }
}
