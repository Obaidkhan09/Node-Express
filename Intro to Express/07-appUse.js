const express = require('express');
const app = express();
const logger = require('./logger');

app.use(logger);
// app.use('/api', logger);

//  here app.use will br triggered for every request,
//  app.use('/api', logger) Here it will triggered
//  whenever path /api is called or any path that starts with path,
//  /api/home/products/about/details

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