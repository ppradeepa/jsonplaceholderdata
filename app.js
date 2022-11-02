'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./routes");
const dotenv = require('dotenv').config();

/* setting up the express app engine */
const app = express();

app.use(cors());
/* returns middleware that only parses urlencoded bodies */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', express.static('build'));

/* setting up the routes */
app.use(routes);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

module.exports = app;