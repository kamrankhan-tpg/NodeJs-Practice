const http = require('http');

//create a server object:
http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(8080);