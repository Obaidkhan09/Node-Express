const express = require('express');
const app = express();

//  Bolow we are setting up a middleware,
//  req => mmiddleware => res.
const logger = (req, res, next) => {
    const method  = req.method;
    const url = req.url;
    const date = new Date().getFullYear();
    console.log(method, url, date);
    //res.send('Hello to Middleware');
    next();
}

app.get('/', logger, (req, res) => {
    res.send('Home Page');
});

app.get('/', logger, (req, res) => {
    res.send('About Page');
});

app.listen(5000);

//  We can pass middleware as app.get 2nd arguement,
//  always remember to trigger the next middleware OR
//  res.send response to indicate / terminate middleware incase of this app.get callback will not execute OR
//  simpley call next() function & it will continue app.get callback