var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var employee = require('./employee');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, '/node_modules')));


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/', employee);



//initialize mongodb
var options = {
			  db: { native_parser: true },
			  server: { poolSize: 5 },
			  replset: { rs_name: 'myReplicaSetName' },
			  user: 'admin',
			  pass: 'admin'
			 } ;
mongoose.connect('mongodb://admin:admin@ds145405.mlab.com:45405/electron'  , options);


module.exports = app;