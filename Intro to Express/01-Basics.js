const express = require('express');
//  Here it returns a function that we need to envoke either by
//  reurire('express')()    OR

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home  Page Boi.');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Page.!');
});

app.all('*', (req, res) => {
    res.send('Sorry Page/Resourse in not found.');
});

app.listen(5000, () => {
    console.log('Listening at port 5000');
});

//  app.get
//  app.post
//  app.put
//  app.delete
//  app.all
//  app.use
//  app.listen