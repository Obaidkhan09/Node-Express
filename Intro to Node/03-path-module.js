//  Working with built in modules
const path = require('path');

//  return the default path seperator for your OS
console.log(path.sep);

//  path.join simply take string input and return the path made from input strings.
const pathFile = path.join('test', 'subTest', 'test file.txt');
console.log(pathFile);

//  path.basename returns the base path/ or last folder/file name in the directory.
const base = path.basename(pathFile);
console.log(base);

//   path.resolve() method is used to resolve a sequence of path-segments to an absolute path.
const absolute = path.resolve(__dirname, 'test', 'subTest', 'test file.txt');
console.log(absolute);