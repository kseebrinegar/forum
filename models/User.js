const QueryBuilder = require('./database/QueryBuilder');

class User extends QueryBuilder {
    constructor(db, jwt, secretKey, bcrypt) {
        super(db)
        this.jwt = jwt;
        this.secretKey = secretKey;
        this.bcrypt = bcrypt;
    }

    registerUser(username, email, password) {
        
        const executeQuery = this.executeQuery;
        const sql = `INSERT INTO users (user_name, email, user_password) VALUES(?, ?, ?)`;
        
        return executeQuery(this.db, sql, [username, email, password]).then((results) => {
            return results.insertId;
        });
    
    }

    generateAuthToken(id) {

        // this will create a jwt token and store it into the users table
        const executeQuery = this.executeQuery;
        const token = this.jwt.sign({ _id: id }, this.secretKey);
        const sql = `UPDATE users SET jwt = ? WHERE user_id = ?`;

        return executeQuery(this.db, sql, [token.toString(), id]).then((results) => {
            return token;
        });
    }

    findByAuthToken(authToken) {

        const executeQuery = this.executeQuery;
        const sql = 'UPDATE users SET jwt = NULL WHERE jwt = ?';

        return executeQuery(this.db, sql, [authToken]).then((results) => {
            return results;
        });
    }

    hashPassword(password) {

        // hashing the password before storing it in the database
        return new Promise((resolve, reject) => {

            this.bcrypt.genSalt(10, (err, salt) => {

                this.bcrypt.hash(password, salt, (err, hash) => {
                    return resolve(hash);
                });

            });
        })
    }

    comparePasswords(clientPassword, databasePassword) {

        // We are comparing the password in the database, to the password
        // from the user. If we find a correct match then
        // I will send back true
        return new Promise((resolve, reject) => {
    
            this.bcrypt.compare(clientPassword, databasePassword, (err, res) => {
            
                if (res) {
                    return resolve('valid login')
                }

                return reject(err);

            });
        })
    }

    findUserByUserName(username) {

        const executeQuery = this.executeQuery;
        const sql = 'SELECT * FROM users WHERE user_name = ?';

        return executeQuery(this.db, sql, [username]).then((results) => {
            return results;
        });
    }
}

module.exports = User;

