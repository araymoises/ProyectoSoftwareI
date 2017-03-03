var express =  require ('express');
var apiRouter =  require ('./routes/apiRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var db = mongoose.connect("mongodb://localhost/db");

var app =  express();

var PythonShell = require('python-shell');

app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources'));

app.use('/api', apiRouter);
// app.use('/id=', apiRouter);

app.use('/', function(req,res){/*
  PythonShell.run('blink.py', function (err) {
    if (err){
      console.log(err);
    }
    else {
      console.log('finished');
    }
  });*/
  res.render('index',{
    world:'Mundo'
  });
});

app.listen(3000, function(req){
  console.log('API running on port 3000.');
});
