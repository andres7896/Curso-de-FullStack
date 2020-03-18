var http = require('http');
var fs = require('fs');

var serve = http.createServer( (request, response) =>{
    fs.readFile('./index.html', (error, html) =>{
        var nombre = 'Anrdrés'
        response.write(html);
        response.end();
    });
} ).listen(4200);