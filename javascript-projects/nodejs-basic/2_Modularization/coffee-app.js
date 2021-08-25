const coffee = require('./coffee');
console.log(coffee);

// local module pake ini: ./
// kalo misalnya gini:
// root folder:.
// ├── coffeimp.js
// ├── package.json
// └── lib
//     └── coffee.js
// ubah alamatnya jadi: const coffee = require('./lib/coffee');

// lalu bisa juga menggunakan ../ untuk keluar dari satu level folder
// digunakan untuk mengimpor module yg beda hirarki
// misal: const coffee = require('../lib/coffee');