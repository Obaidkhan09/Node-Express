const express = require('express');
const app = express();
const { people } = require('./data');
//  Static assets
app.use(express.static('./public'));
//  Parse form data (coming from regular)
app.use(express.urlencoded({ extended: false }));
//  Parse json data (coming from JS)
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
    console.log(data);
});

//  POST request for JAVASCRIPT FORM
app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if(!name){
        return res.status(400).json({ success : false, msg : "Please Enter Valid value." });
    }
    return res.status(201).json({person: name});
});


//  POST request for REGULAR FORM
app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}.`);
    }

    res.status(401).send('Please Provide Valid Name.');
});
app.listen(5000);