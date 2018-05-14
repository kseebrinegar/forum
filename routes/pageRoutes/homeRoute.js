
module.exports = (app, model) => {

    app.get('/', (req, res) => {
        console.log('hi');
        res.send('home');
    });

};