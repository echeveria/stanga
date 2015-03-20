#!/usr/bin/env node

var server = require("./server");
var argv = require('optimist').argv;

console.log(argv.p);

server.start(argv.p);
