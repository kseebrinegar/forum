

module.exports = (app, models, middlewares, methods) => {

    app.post('/api/register', [middlewares.removeAuthToken(models), middlewares.checkIncomingDataValues(models)], (req, res) => {
        
        methods.register(models, req, res);

    });

};