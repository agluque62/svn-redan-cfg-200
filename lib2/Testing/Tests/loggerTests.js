const logutils = require("../../srv/lib/logger.js")

exports.ExecuteTest = () =>{
    const logger = logutils.createLogger();

    logger.Info("Hello World");

    logger.Trace("Operacion ejecutada: ", {res: "ok", error: false});

    logger.Error("Goodbye World");
}