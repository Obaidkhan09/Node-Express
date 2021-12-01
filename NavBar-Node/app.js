const http = require('http');
const fs = require('fs');

http.createServer( (req, res) => {
    const homePage = fs.readFileSync('./index.html');
    const homeStyle = fs.readFileSync('./style.css');
    const HomeLogic = fs.readFileSync('./browser-app.js');
    const logo = fs.readFileSync('./logo.svg');
    const url = req.url;

    //  Home Page html
    if ( url === '/' ){
        res.writeHead(200, {'content-type' : 'text/html'} );
        res.write(homePage);
        res.end();
    }

    //  Home Page Style
    else if (url === '/styles.css'){
        res.writeHead(200, {'content-type' : 'text/css'} );
        res.write(homeStyle);
        res.end();
    }
    
    //  Home Page Logo
    else if (url === '/logo.svg'){
        res.writeHead(200, {'content-type' : 'image/svg+xml'} );
        res.write(logo);
        res.end();
    }
    
    //  Home Page Logic
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type' : 'text/js'} );
        res.write(HomeLogic);
        res.end();
    }

    else {
        res.writeHead(404, {'content-type' : 'text/html'});
        res.write('<h1>Oops.! page you requeted is not found.</h1>');
        res.end();
    }

}).listen(5000);