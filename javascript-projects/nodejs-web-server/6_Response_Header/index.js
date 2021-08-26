// Apapun MIME types yg digunakan, web server harus memberi tahu pada client saat me-response
const requestListener = (request, response) => {
    // data pada header bisa lebih dari satu
    response.setHeader('Content-Type', 'text/html');
    response.setHeader('X-Powered-By', 'NodeJS');

};

