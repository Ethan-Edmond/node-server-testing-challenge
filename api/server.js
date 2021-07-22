const express = require('express');

const server = express();

const authRouter = require('./auth/auth-router');
const targetsRouter = require('./targets/targets-router');

server.use(express.json());

server.use('/api/auth', authRouter);

server.use('/api/targets', targetsRouter);

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
