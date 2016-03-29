/// <reference path='./typings/tsd.d.ts' />

import express = require('express');
var server = express();
server.listen(3000);
console.log("server is listening..");
import path = require('path');
import bodyparser =  require('body-parser');


var pathname = path.resolve(__dirname, "./../client/www");
server.use(express.static(pathname));
server.use(bodyparser.json())
server.use(bodyparser.urlencoded({ extended : false}));