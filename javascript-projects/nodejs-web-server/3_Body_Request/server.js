// Latihan Mendapatkan Body Request

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
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });
    
        request.on('end', () => {
            body = Buffer.concat(body).toString();
            
            // ambil name dari sini: <h1>Hai, {"name": "Dicoding"}!</h1>
            const {name} = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);

        });
    }

};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

//  To run the server, use this command: npm run start

/*  run: curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Fina\"}"
    output: <h1>Hai, Fina!</h1>
    */
