// Informasi pada header hanya sbg metadata
// Pada body ini lah data utama seharusnya disimpan

const requestListener = (request, response) =>{
    // response.write('<html>');
    // response.write('<body>');
    // response.write('<h1>Hello, World!</h1>');
    // response.write('<body>');
    // response.write('</html>');
    // response.end();

    // atau
    response.end('<html><body><h1>Hello, World!</h1></body></html>');

};