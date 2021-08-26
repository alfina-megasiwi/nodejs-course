// Latihan Mendapatkan Body Request

const http = require ('http');

const requestListener = (request, response) =>{
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    
    const {method, url} = request;

    if(url === '/'){
        if(method === 'GET'){
            response.end('<h1>ini adalah homepage</h1>');
        }else{
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }else if(url === '/about'){
        if(method === 'GET'){
            response.end('<h1>Halo! Ini adalah halaman about</h1>');
        }else if(method === 'POST'){
            let body = [];
            request.on('data', (chunk) => {
                body.push(chunk);
            });
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                // ambil name dari sini: <h1>Hai, {"name": "Dicoding"}!</h1>
                const {name} = JSON.parse(body);
                response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
            });
        }else{
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    }else{
        response.end('<h1>Halaman tidak ditemukan</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
});

//  To run the server, use this command: npm run start

/*  kumpulan output

    curl -X GET http://localhost:5000/home
    output: <h1>Halaman tidak ditemukan!</h1>
    curl -X GET http://localhost:5000/hello
    output: <h1>Halaman tidak ditemukan!</h1>
    curl -X GET http://localhost:5000/test
    output: <h1>Halaman tidak ditemukan!</h1>

    curl -X GET http://localhost:5000
    output: <h1>Ini adalah homepage</h1>
    curl -X POST http://localhost:5000
    output: <h1>Halaman tidak dapat diakses dengan POST request</h1>
    curl -X DELETE http://localhost:5000
    output: <h1>Halaman tidak dapat diakses dengan DELETE request</h1>
    
    curl -X GET http://localhost:5000/about
    output: <h1>Halo! Ini adalah halaman about</h1>
    curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Fina\"}"
    output: <h1>Halo, Fina! Ini adalah halaman about</h1>
    curl -X PUT http://localhost:5000/about
    output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
    curl -X DELETE http://localhost:5000/about
    output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>
    */
