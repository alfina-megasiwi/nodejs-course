const http = require('http');

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

// contoh logika yg biasa dituliskan pada request listener
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
    response.end('<h1>Hello HTTP Server!</h1>')
};

const server = http.createServer(requestListener);

/*  pada request, kita dapat melihat alamat yg diminta, data yg dikirim, dan HTTP metode yg digunakan oleh client.
    pada response, kita dapat menentukan data yg diberikan, format doc yg digunakan, kode status, dan info response lainnya.
    */

/*  Agar server selalu sedia menangani permintaan yg masuk, terdapat method listen().
    Method itulah yg membuat http.server selalu standby menangani permintaan client.
    Setiap ada permintaan masuk, request listner akan tereksekusi.
    
    Method listen() dapat menerima 4 parameter, berikut detailnya:

    1. port (number) : jalur yang digunakan untuk mengakses HTTP server.
    2. hostname (string) : nama domain yang digunakan oleh HTTP server.
    3. backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
    4. listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).
    
    */

const port = 5000;
const host = 'localhost';

server.listenerCount(port, host, () =>{
    console.log(`Server berjalan pada http://${host}:${port}`);
})