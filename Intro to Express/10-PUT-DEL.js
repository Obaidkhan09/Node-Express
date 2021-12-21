const express = require('express');
const app = express();
const { people } = require('./data');

// app.use(express.urlencoded({extended:false}));

// app.get('/', (req, res) => {
//     res.status(200).send("Welcome to Home Page.!");
// });

app.put('/api/:id', express.urlencoded({extended:false}), (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    console.log(id, name);
    console.log(req.body);
    res.send("PUT Request.!!!");
})

app.listen(5000);
