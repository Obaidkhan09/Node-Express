let { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name) {
        return res
        .status(400)
        .json({success: false, msg: 'Pleaseprovide name value.'});
    }
    res.staus(201).send({success: true, person: name});
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .json({ success: false, msg: "Please provide name value."});
    }
    res.status(201).json({ success: true, data: [...people, name] });
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((item) => item.id === Number(id));

    if(!person) {
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${id} found.!`});
    }

    const newPeople = people.map((item) => {
        if(item.id === Number(id)){
            item.name === name;
        }
        return item;
    });
    res.status(200).json({success: true, data: newPeople});
}

const deletePerson = ( req, res ) => {
    const person = people.find((item) => people.id === Number(req.params.id));
    if(!person){
        return res
        .status(404)
        .json({success: false, data: `No person with id ${req.params.id}`});
    }
    const newPeople = people.filter((item)=> item.id !== Number(req.params.id));
    return res
    .status(200)
    .json({success: true, data: newPeople});
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}
