// Tidak seperti filesystem, teknik stream membaca berkas dengan bagian demi bagian (tidak sekaligus)
const fs = require('fs');
 
const readableStream = fs.createReadStream('./article.txt', {
    // ukuran buffer
    highWaterMark: 10
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});