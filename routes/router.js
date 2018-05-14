var path = require('path');

module.exports = (app, models, middlewares, methods) => {
    
    // routes that serve actual pages with injected data
    require('./pageRoutes/homeRoute')(app, models);

    // routes for users
    require('./userRoutes/registerRoute')(app, models, middlewares, methods);
    require('./userRoutes/login')(app, models, middlewares, methods);
    require('./userRoutes/logout')(app, models, middlewares);
    

   /* app.get('/you', (req, res) => {
        res.sendFile('home.html', { root: path.join(__dirname, '../views') });
    });

    app.get('*', (req, res) => {
        res.sendFile('home.html', { root: path.join(__dirname, '../views') });
    });*/

};