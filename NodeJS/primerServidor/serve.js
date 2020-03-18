
var http = require('http');
var fs = require('fs');

/*fs.readFile('./index.html', (error, html) => {
        ... Creamos el servidor
})*/

function startServer(){
    var html = fs.readFileSync('./index.html');
    
    http.createServer( (request, response) =>{

        // Status code 200: Todo salió bien.
        // Status code 400: No se encontro lo que se solicitó o hubo algún error.
        // Status code 500: Error en el servidor.

        response.writeHead( 200, { 'Content-Type' : 'text/html' }); //Retorna un HTML
        response.writeHead(200, { 'Content-Type': 'application/json' }); //Retorna un JSON
        response.write(html)
        response.end();
    } ).listen(4200);
}

exports.startServer = startServer;

