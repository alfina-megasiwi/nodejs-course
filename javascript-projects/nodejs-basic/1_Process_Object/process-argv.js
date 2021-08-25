const fname = process.argv[2];
const lname = process.argv[3];

console.log(`Hello ${fname} ${lname}`);

// misal dijalankan:
// node app.js Alfina Megasiwi (disclaimer: app.js maksudnya file js)
// process.argv akan bernilai:
// 1. Elemen pertama: path lokasi node yg menjalankan process
// 2. Elemen kedua: path berkas jsnya
// 3. Elemen ketiga: "Alfina"
// 4. Elemen keempat: "Megasiwi"
