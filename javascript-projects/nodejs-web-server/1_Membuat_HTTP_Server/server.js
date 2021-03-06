// Latihan Membuat HTTP Server

const http = require ('http');

const requestListener = (request, response) =>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Hello HTTP Server!</h1>');
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// To run the server, use this command: npm run start