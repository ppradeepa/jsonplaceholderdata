'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require("./routes");
const dotenv = require('dotenv').config();
var timeout = require('connect-timeout')
var path = require("path");

/* setting up the express app engine */
const app = express();
app.use(timeout(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}

app.use(cors());
/* returns middleware that only parses urlencoded bodies */

/* returns middleware that only parses urlencoded bodies */
app.use(bodyParser.json()); // support json encoded bodies

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname+ "/build/" + "index.html"));
});
let oneYear = 31536000; // seconds of one year
app.use(express.static('build',{ maxAge: oneYear }));
/* setting up the routes */
app.use(routes);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

module.exports = app;