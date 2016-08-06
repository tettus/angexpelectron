var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function (req, res) {
  res.send('Hello World')
})


var options = {
			  db: { native_parser: true },
			  server: { poolSize: 5 },
			  replset: { rs_name: 'myReplicaSetName' },
			  user: admin,
			  pass: admin
			 } ;
mongoose.connect('mongodb://admin:admin@ds145405.mlab.com:45405/electron'  , options);


module.exports = app;