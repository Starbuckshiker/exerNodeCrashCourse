const http = require('http');

// Create server obj
http.createServer((req, res) => {
// Write response
res.write('Meow World')
res.end()
})
.listen(5000, () => console.log('Server running...'))