const express = require('express');
const app = express();
const { people } = require('./data');

app.use(express.json());

// app.get('/', (req, res) => {
//     res.status(200).send("Welcome to Home Page.!");
// });

app.put('/api/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((temp) => temp.id === Number(id));

    if(!person){
        return res
        .status(404)
        .json({ success: false, msgs: `No person with id ${id} found.` });
    }

    const newPeople = people.map((item) => {
        if(item.id === Number(id)){
            item.name = name;
        }
        return item;
    });

    res.status(200).json({ success: true, data: newPeople });
    
});

app.delete('/api/:id', (req, res) => {
    const person = people.find((temp) => temp.id === Number(req.params.id));

    if(!person){
        return res
        .status(404)
        .json({ success: false, msgs: `No person with id ${req.params.id} found.` });
    }
    const newPeople = people.filter((item) => item.id !== Number(req.params.id));
    return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000);
