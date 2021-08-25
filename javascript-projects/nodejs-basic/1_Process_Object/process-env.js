// mengubah nilai variable host misal development atau production
// dijalankan di cmd: SET NODE_ENV=production && node app.js

// code hanya contoh, tidak bisa di-run
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});