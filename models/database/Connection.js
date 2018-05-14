
// just connects to the database and returns the connection object
class Connection {
    constructor(mysql, host, user, password, database) {
        this.mysql = mysql,
        this.host = host;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    makeConnection() {

        const connection = this.mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        connection.connect((err) => {
            if (err) throw err;
        });

        return connection;

    }
}

module.exports = Connection;