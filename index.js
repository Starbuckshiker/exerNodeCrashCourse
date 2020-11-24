//console.log("Hello from Node.js...")
// const Person = require("./person");

// const person1 = new Person("John Doe", 30);

// person1.greeting();

// console.log(Person);

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data ));

// logger.log("Meow World");
// logger.log("Did you say Meow");
// logger.log("Meow");

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 
        (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type' : 'text/html'});
            res.end(content);
        }
    );
}

// if (req.url === '/about') {
//     fs.readFile
//     (path.join(__dirname, 'public', 'about.html'),
//      (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-type' : 'text/html'});
//         res.end(content);
//     }
//     );
    if (req.url === '/api/user') {
        const users = [
            { name: 'I Rock', age: 40 },
            { name: 'You Rock', age: 30 }
        ];
        res.writeHead(200, { 'Content-Type' : 'application/json'});
        res.end(JSON.stringify(users));

}
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
