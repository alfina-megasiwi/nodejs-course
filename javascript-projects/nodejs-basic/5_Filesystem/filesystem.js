// hanya contoh, tidak bisa di-run
const fs = require('fs');

const fileReadCallback = (error, data)=>{
    if(error){
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}

fs.readFileSync('todo.txt', 'utf-8', fileReadCallback)

// versi synchronous
// const fs = require('fs');
// const data = fs.reeadFileSync('todo.txt', 'utf-8');
// console.log(data);