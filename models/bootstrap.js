

// this file init every class and passes all the required data
// for each class and exports it to index.js file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');

const keys = require('../config/keys');
const Connection = require('./database/Connection');
const QueryBuilder = require('./database/QueryBuilder');
const CheckIncomingDataValues = require('./CheckIncomingDataValues');
const User = require('./User');
const db = new Connection(mysql, keys.dbCred.host, keys.dbCred.user, keys.dbCred.password, keys.dbCred.database);

module.exports =  {
    QueryBuilder: new QueryBuilder(db.makeConnection()),
    CheckIncomingDataValues: new CheckIncomingDataValues(),
    User: new User(db.makeConnection(), jwt, keys.jwtSecretKey, bcrypt)
}