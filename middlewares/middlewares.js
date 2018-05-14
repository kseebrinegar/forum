
// this file will export all application middlewares
// to the index.js file where it will be passed down
// to the routes files that require them.
module.exports = {
    removeAuthToken: require('./removeAuthToken'),
    checkIncomingDataValues: require('./checkIncomingDataValues')
}