const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<!DOCTYPE html><html><head><title>ECS Fargate</title></head><body style="background:#f8f9fa;text-align:center;padding-top:50px;"><h1>Hello from ECS Fargate! v1.0</h1></body></html>');
});

server.listen(8080, () => {
  console.log('Server running on port 8080');
});
