var express = require("express");
const path = require("path")
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(8989);