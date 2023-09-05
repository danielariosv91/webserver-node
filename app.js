/** Create server http */
import http from 'http';

http.createServer((request, response) => {
    response.write("Hola Mundo");
    response.end();
}).listen(8080);

console.log("Listen on 8080 port")