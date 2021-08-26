// Cara untuk mendapatkan data body:
const requestListener = (request, response) => {
    // tempat menampung buffer pada stream
    let body = [];

    // ketika event data terjadi pada request, isi array body dengan potongan data
    request.on('data', (chunk) => {
        body.push(chunk);
    });

    // ketika proses stream berakhit, event end akan raise
    // di sini kita mengubah variable body yg menampung buffer menjadi data sebenarnnya dlm bentuk String
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
}