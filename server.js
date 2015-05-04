var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><head><title>Test</title></head><body><input id="btn" type="button" value="Click me!"></body></html>\n');
}).listen(3000, '127.0.0.1');

console.log('Server running at http://127.0.0.1:3000/');
