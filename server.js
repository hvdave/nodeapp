var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(80, 'ec2-23-22-219-226.compute-1.amazonaws.com');
console.log('Server running at http://ec2-23-22-219-226.compute-1.amazonaws.com/');

