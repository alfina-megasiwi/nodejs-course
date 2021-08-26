// Latihan Handling Request

const http = require ('http');

const requestListener = (request, response) =>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    const {method} = request;

    if(method == 'GET'){
        // response saat GET
        response.end('<h1>Hello!</h1>');
    }

    if(method == 'POST'){
        // response saat POST        
        response.end('<h1>Hai!</h1>');

    }

    if(method == 'PUT'){
        // response saat POST        
        response.end('<h1>Bonjour!</h1>');

    }

    if(method == 'DELETE'){
        // response saat POST        
        response.end('<h1>Salam!</h1>');

    }


};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

//  To run the server, use this command: npm run start

/*  the output (run this on cmd):
    curl -X GET http://localhost:5000
    output: <h1>Hello!</h1>
    curl -X POST http://localhost:5000
    output: <h1>Hai!</hai>
    curl -X PUT http://localhost:5000
    output: <h1>Bonjour!</h1>
    curl -X DELETE http://localhost:5000
    output: <h1>Salam!</h1>
    */
