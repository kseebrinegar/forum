
// this file will export all methods/logic
// to the index.js file where it will be passed down
// to the routes files that require them.
module.exports =  {
    login: require('./user/login'),
    register: require('./user/register')
}
