var mysql = require('mySql');
const util = require( 'util' );

function makeDbAsync( config ) {
    const connection = mysql.createConnection( {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_BASE,
        port: process.env.DB_PORT,
        multipleStatements: true
    } );
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
  async function dbTransaction( db, callback ) {
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

exports.makeDbAsync = makeDbAsync
exports.dbTransaction = dbTransaction