const express = require('express');
const ticketsRouter = require('./routes/ticketsRoutes.js');
const errorHandler = require('./common/errorHandler.js');

const server = express();

function registerPreRoutesMiddleWare() {
  server.use(express.json());
}

function buildRoutes() {
  server.use('/api/v1/tickets', ticketsRouter);
}

function registerPostRoutesMiddleWare() {
  server.use(errorHandler);
}

exports.buildServer = () => {
  registerPreRoutesMiddleWare();
  buildRoutes();
  registerPostRoutesMiddleWare();
  return server;
};
