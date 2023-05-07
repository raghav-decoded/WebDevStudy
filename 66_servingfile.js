// 66 and 67
// For ports other than 80 you have to mention portname in the url
// importing modules
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/66_index.html');
const about = fs.readFileSync('/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/66_about.html');
const services = fs.readFileSync('/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/66_services.html');
const contact = fs.readFileSync('/Users/raghavsingh/Documents/Web_Dev_Study/NODEJS/66_contact.html');

// Request, Response
const server = http.createServer((req, res) => {
    // Prints url selected
    console.log(req.url); 
    url = req.url;
    console.log(`${ url }`);
    res.statusCode = 200;
    // Setting content-type as html
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        // serve home
        res.end(home);
    }
    else if(url == '/66_about'){
        res.end(about);
    }
    else if(url == '/66_services'){
        res.end(services);
    }
    else if(url == '/66_contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
