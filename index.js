//console.log("Hello from Node.js...")
// const Person = require("./person");

// const person1 = new Person("John Doe", 30);

// person1.greeting();

// console.log(Person);

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data ));

logger.log("Meow World");
logger.log("Did you say Meow");
logger.log("Meow");