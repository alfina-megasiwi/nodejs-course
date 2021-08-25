const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Alfina\n');
writableStream.write('Megasiwi\n');
writableStream.end('End');
// bisa juga writableStream.end();
