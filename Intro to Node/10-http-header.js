const http = require('http');
const fs = require('fs');

http.createServer( (req, res)=> {
    const url = req.url;
    const homePage = fs.readFileSync('./10-index.html');
    res.writeHead(200, {'content-type' : 'text/html'});
    //  try to change content-type to text/plain & observe the change in render.

    //  for home page
    if (url === '/'){
        // console.log(req.method);
        // console.log(req.url);
        res.write(homePage);
        res.end();
    }

    //  for about page
    else if (url === '/about'){
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write('<h1>Hello to About Page.</h1>');
        res.end();
    }

    //  for 404,
    else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h1>Oops.! the page you requested is not found.</h1>');
        res.end();
    }
}).listen(5000);
