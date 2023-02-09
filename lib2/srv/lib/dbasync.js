var mysql = require('mySql');
const util = require( 'util' );

exports.makeDbAsync = function makeDbAsync( config ) {
    const connection = mysql.createConnection( config===undefined ? exports.dbconfig : config );
    var fatal = false;
    return {
      query( sql, args ) {
        return util.promisify( connection.query )
          .call( connection, sql, args );
      },
      beginTransaction() {
        return util.promisify( connection.beginTransaction )
          .call( connection );
      },
      commit() {
        return util.promisify( connection.commit )
          .call( connection );
      },
      rollback() {
        return util.promisify( connection.rollback )
          .call( connection );
      },
      close() {
        return fatal ? "" : util.promisify( connection.end ).call( connection );
      },
      setFatal(isfatal) {
        fatal=isfatal;
      }
    };
  }
  exports.dbTransaction = async function dbTransaction( db, callback ) {
    var fatal = false;
    try {
      await db.beginTransaction();
      await callback();
      await db.commit();
    } 
    catch ( err ) {
      fatal = err.fatal;
      if (!fatal) await db.rollback();
      throw err;
    } 
    finally {
      if (!fatal) await db.close();
    }
  }
  exports.dbconfig = {
    host: "127.0.0.1",
    user: "root",
    password: "cd40",
    database: "ug5kv22",
    port: 3306,
    multipleStatements: true
  }
