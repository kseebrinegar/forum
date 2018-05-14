

module.exports = (app, models, middlewares) => {

   app.post('/api/logout', middlewares.removeAuthToken(models), (req, res) => {
      
        res.render('home.hbs');
      
    });

};