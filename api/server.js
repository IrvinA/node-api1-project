const express = require('express');
const User = require('./users/model');
const server = express();
server.use(express.json());

module.exports = server;
