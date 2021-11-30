//  stream let you read and write file in chinck
//  not like read file where whole file is read at once

//  creating a big file

const fs = require('fs');
// for ( let i = 0; i <5000; i++){
//     fs.writeFileSync(
//         './test/BigFile.txt',
//         `Hello line ${i}.\n`,
//         {flag: 'a'});
// }

const stream = fs.createReadStream('./test/BigFile.txt');
stream.on('data', (result) => {
    console.log(result);
});

//  Note the output is n chunks, it read data in chunks
//  default 64kb chunk is read at once
//  {highWaterMark: 90000} to control size to read at once in Bytes
//  {encoding: 'utf8} for file encoding