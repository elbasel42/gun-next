'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var gun_1 = require('gun');
var http_1 = require('http');
var server = (0, http_1.createServer)(function (req, res) {
  res.writeHead(200);
  res.end('GUN server is running');
});
// Attach Gun to the server
var gun = (0, gun_1)({ web: server });
// Optionally, log Gun messages for debugging
gun.on('in', function (msg) {
  console.log('Incoming message:', msg);
});
gun.on('out', function (msg) {
  console.log('Outgoing message:', msg);
});
// Start the server
server.listen(3001, function () {
  console.log('Server is listening on http://localhost:3001');
});
