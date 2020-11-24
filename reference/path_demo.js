const path = require("path");

//base file name
console.log(pathbasename(__filename));

//director name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename).base);

//Concatenate path
console.log(path.join(__dirname, "test", "hello.html"));
