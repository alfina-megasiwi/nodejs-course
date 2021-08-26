// Latihan Mendapatkan Body Request

const http = require ('http');

const requestListener = (request, response) =>{
    // ubah Conten-Type nya menjadi JSON
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');


    const {method, url} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({
                message: 'Ini adalah homepage',
            }));
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('Halo! Ini adalah halaman about');
        }else if(method === 'POST'){
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                // ambil name dari sini: <h1>Hai, {"name": "Dicoding"}!</h1>
                const {name} = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({
                    message: `Halo, ${name}! Ini adalah halaman about`,
                }));
            });
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({
                message: `Halaman tidak dapat diakses dengan ${method} request`,
            }));
        }
    }else{
        response.statusCode = 400;
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan',
        }));
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// To run the server, use this command: npm run start
/*  curl -X GET http://localhost:5000/anything
    output: { "message":"Halaman tidak ditemukan!"}
    curl -X GET http://localhost:5000/test
    output: { "message":"Halaman tidak ditemukan!"}
    curl -X GET http://localhost:5000/
    output: {"message":"Ini adalah homepage"}
    curl -X GET http://localhost:5000/about
    output: {"message":"Halo! ini adalah halaman about"}
    curl -X DELETE http://localhost:5000/
    output: {"message":"Halaman tidak dapat diakses dengan DELETE request"}
*/