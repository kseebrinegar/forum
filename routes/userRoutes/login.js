

module.exports = (app, models, middlewares, methods) => {

    app.post('/api/login', [middlewares.removeAuthToken(models), middlewares.checkIncomingDataValues(models)], (req, res) => {
        
        methods.login(models, req, res);
        
    });

};