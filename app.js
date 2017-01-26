var express =  require ('express');
var apiRouter =  require ('./routes/apiRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var db = mongoose.connect("mongodb://localhost/db");

var app =  express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources'));
app.listen(3000, function(req){
  console.log('API running on port 3000.');
});

app.use('/api', apiRouter);



app.use('/', function(req,res){
  res.render('index',{
    world:'Mundo'
  });
});
