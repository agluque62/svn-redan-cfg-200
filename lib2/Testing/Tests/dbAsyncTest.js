const dbutils = require('../../srv/lib/dbasync');
const logger = require('../../srv/lib/logger').createLogger();

const dbTesting = {
    host: "127.0.0.1",
    user: "root",
    password: "cd40",
    database: "test",
    port: 3306,
    multipleStatements: true
};
exports.ExecuteTest = async () => {
    const dataToInsert = {int_field: 23, string_field: "Esto es una prueba", date_field: null};
    const dataToUpdate = {int_field: 321 };

    var db = dbutils.makeDbAsync(dbTesting);
    try {
        await dbutils.dbTransaction(db, async () => {
            var result = await db.query("select * from testing");
            logger.Info('For SELECT ', result);
            result = await db.query('INSERT INTO testing (int_field, string_field, date_field) Values (?, ?, ?)', 
                    [23, "Esto es una prueba", null]);
            logger.Info('For INSERT ',result);
            result = await db.query('UPDATE testing SET int_field=?, string_field=?, date_field=?', 
                    [321, "Esto no es una prueba", null]);
            logger.Info('For UPDATE', result);
            result = await db.query('DELETE FROM testing');
            logger.Info('For DELETE', result);            
        });
    }
    catch(error){
        logger.Error("Error => ", error);
    }
}