//  Working with built-in modules FileSystem (fs) sync.

const fs = require('fs');
const first = fs.readFileSync('./test/first.txt', 'utf8'); // Second parameter is for decoding or format
const second = fs.readFileSync('./test/subTest/test file.txt', 'utf-8');
console.log(first, second);

//  Writing a file
//  If the file already exists, it will will re-write the file / append
//  If file name doesn't exists, it will create a file with the name and path provided.

fs.writeFileSync(
    './test/createFile.txt',
    `This is new file created with writeFileSync
    ${first},
    ${second}`
);
//  if user want to append but not re-write the whole file
//  pass 3rd parameter/ arg as { flag: 'a' } whith braces, where a stand for append.
