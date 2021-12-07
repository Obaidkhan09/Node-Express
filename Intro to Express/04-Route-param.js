const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Home Page</h1> <a href='/api/products'>Products</a>`);
});

app.get('/api/products', (req, res) => {
    const newProduct = products.map((item) => {
        const {id, name, image} = item;
        return {id, name, image};
    });
    res.json(newProduct);
});

app.get('/api/products/:productID', (req, res) => {
    //  console.log(req.params);
    const {productID} = req.params;
    const singleProduct = products.find( (item) => item.id === Number(productID));   //here item is being returned, ES6 syntax.
    res.json(singleProduct);
    
});



app.listen(5000);