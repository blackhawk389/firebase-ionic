/// <reference path='./typings/tsd.d.ts' />
var express = require('express');
var server = express();
server.listen(3000);
console.log("server is listening..");
var path = require('path');
var bodyparser = require('body-parser');
var pathname = path.resolve(__dirname, "./../client/www");
server.use(express.static(pathname));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: false }));
