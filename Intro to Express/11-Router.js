const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');

app.get('/', (req, res) =>{
    res.status(200).send("Welcome to Home Page.!");
});
app.use('/api/people', peopleRouter);

app.listen(5000);