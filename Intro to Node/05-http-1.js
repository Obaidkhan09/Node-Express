//  Working with built-in modules http

const http = require('http');
//  creating server, createServer expects a callback function as parameter
//  req-> request received
//  res-> respond to the req
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is Home page.');
    }

    else if (req.url === '/about') {
        res.end('This is about Page.');
    }

    else res.end(`
    <h1>Opps.!<h1>
    <p>This page is not found.</p>
    `);
});
server.listen(5000);    //  this server is visible on port 5000 (localhost:5000)

//  If we don't use if, else if & else, server is likely to crash,
//  or we can use return statement for every if (if we don't want to use else if & else)