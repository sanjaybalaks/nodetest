var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;


  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    console.log('node cluster activated');
  }).listen(8000);
