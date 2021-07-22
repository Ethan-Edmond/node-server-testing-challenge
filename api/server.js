const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res, next) => {
  res.json('Hellooooo');
});

server.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = server;
