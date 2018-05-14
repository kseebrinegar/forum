
class QueryBuilder {
    constructor(db) {
        this.db = db;
    }

    executeQuery(db, sql, injectedValues) {
        // (db = database connection, sql = the query, whats being injected/escaped and queries the database) 
        // This method grabs the passed data
        // from child classes / derived classes / subclasses
        // and excutes query
        return new Promise((resolve, reject) => {
       
            db.query(sql, injectedValues, function (error, results) {

                if (error) {
                    console.log(error.code + ' ' + error.sqlMessage);
                    return reject();
                }

                return resolve(results);

            });
        });

    }

}

module.exports = QueryBuilder;