const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]);


app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/api/home', (req, res) => {
    res.send('Api Home');
});

app.get('/api/products', (req, res) => {
    res.send('Api Products');
});

app.listen(5000);