
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));

const models = require('./models/bootstrap');
const middlewares = require('./middlewares/middlewares');
const methods = require('./methods/methods');

require('./routes/router')(app, models, middlewares, methods);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is up and running!');
});