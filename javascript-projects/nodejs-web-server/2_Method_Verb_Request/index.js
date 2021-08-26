const http = require ('http');

// option 1
const requestListener = (request, response) =>{
    const method = request.method;
};

// option 2 (object destructuring)
const requestListener = (request, response) =>{
    const {method} = request;

    if(method == 'GET'){
        // response saat GET
    }

    if(method == 'POST'){
        // response saat POST
    }

    // method lainnya
};

/*  Properti method memiliki tipe string. Valuenya berupa
    GET, POST, PUT, atau method lain sesuai dengan permintaan client.
    */

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// To run the server, use this command: npm run start