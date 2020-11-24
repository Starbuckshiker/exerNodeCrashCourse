const { UV_FS_O_FILEMAP } = require('constants');
const fs = require('fs');
const path = require('path');

//create folder
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//  if (err) throw err;
// console.log ('Folder created....')'
//});

//Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello Class!', err => {
//     if (err) throw err;
//     console.log('File written to....');
 
//     // File append    
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '  I love node.js', err => {
//         if (err) throw err;
//         console.log('File written to....');
//     });
// });


// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//  if (err) throw err;
// console.log (data);
// });

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'Hello World.txt'), (err) => {
    if (err) throw err;
   console.log ('File renamed...');
   });