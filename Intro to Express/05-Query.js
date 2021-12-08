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

app.get('/api/products/query', (req, res) => {
    //  console.log(req.query);
    const { search, limit } = req.query;    //  query is just a placeholder/ variable
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((item) => item.name.startsWith(search));
    }
    
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1){
        return res.status(200).json({success: true, data: []});
    }
    
    res.status(200).json(sortedProducts);
});

app.listen(5000);
//  you can visit /api/products/1 OR /api/products/2 OR so on.
//  No need to Route products & products/query seperately.