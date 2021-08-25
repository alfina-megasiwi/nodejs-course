// TODO: tampilkan teks pada notes.txt pada console.

// import modul fs
const fs = require('fs');
// import modul path
const { resolve } = require('path');

const fileReadCallback = (error, data)=>{
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);

// gunakan method path.resolve(__dirname, 'notes.txt');
// untuk mentapkan alamat berkas