const dbutils = require('./dbasync');

/**  */
exports.getExternalResources = async (extType) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var condition = extType == undefined  ? " " : " WHERE tipo=? ";
    var query = "SELECT idrecursos_externos, uri, tipo, alias FROM recursos_externos" + condition + "ORDER BY alias";
    var parameters = extType == undefined  ? null : [extType];
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query, parameters);
    });
    return {error: null, lista_recursos: res.length > 0 ? res : null};
};
/** */
exports.getRadioExternalResources = async (extType) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var condition = extType == undefined  ? " WHERE tipo <> 3 " : " WHERE tipo=? ";
    var query = "SELECT idrecursos_externos, uri, tipo, alias FROM recursos_externos" + condition + "ORDER BY alias";
    var parameters = extType == undefined  ? null : [extType];
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query, parameters);
    });
    return {error: null, lista_recursos: res.length > 0 ? res : null};
};
/** */
exports.filterExternalResources = async (filterType, chars2Find) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var condition = filterType === 4  ? (" WHERE alias LIKE '%" + chars2Find + "%' AND tipo <> 3 " ) : 
                                        (" WHERE uri LIKE '%" + chars2Find + "%' AND tipo <> 3 ");
    var query = "SELECT idrecursos_externos, uri, tipo, alias FROM recursos_externos" + condition + "ORDER BY alias";
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query);
    });
    return {error: null, lista_recursos: res.length > 0 ? res : null};
};
/** */
exports.filterExternalPhoneResources = async (filterType, chars2Find) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var condition = filterType === 4  ? (" WHERE alias LIKE '%" + chars2Find + "%' AND tipo = 3 " ) : 
                                        (" WHERE uri LIKE '%" + chars2Find + "%' AND tipo = 3 ");
    var query = "SELECT idrecursos_externos, uri, tipo, alias FROM recursos_externos" + condition + "ORDER BY alias";
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query);
    });
    return {error: null, lista_recursos: res.length > 0 ? res : null};
};
/** */
exports.getExternalResource = async (idExtResource) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var query = "SELECT idrecursos_externos, uri, tipo, alias FROM recursos_externos  WHERE idrecursos_externos=?";
    var parameters = [idExtResource];
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query, parameters);
    });
    return {error: null, lista_recursos: res.length > 0 ? res : null};
};
/** */
exports.postExternalResource = async (extResource) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    await dbutils.dbTransaction(db, async () => {
        if (extResource.id_recurso == -1) {
            res = await db.query("SELECT * FROM recursos_externos WHERE uri = '" + extResource.uri + "' OR alias='" + extResource.alias + "';");
            if (res.length > 0)
                throw "Alias o URI repetidos";
            res = await db.query("INSERT INTO recursos_externos (uri,tipo,alias) VALUES (?,?,?)", [extResource.uri, extResource.tipo, extResource.alias]);
        }
        else {
            res = await db.query("UPDATE recursos_externos SET uri=?,tipo=?,alias=? WHERE idrecursos_externos=?", 
                                    [extResource.uri, extResource.tipo, extResource.alias, extResource.id_recurso]);
        }
    });
    return {error: null, lista_recursos: res};
};
/** */
exports.deleteExternalResource = async (idExtResource) => {
    var res = {};
    var db = dbutils.makeDbAsync();
    var query = "DELETE FROM recursos_externos WHERE idrecursos_externos=?";
    var parameters = [idExtResource];
    await dbutils.executeQueries(db, async () =>{
        res = await db.query(query,parameters);
    });
    return {error: null, lista_recursos: res};
};
