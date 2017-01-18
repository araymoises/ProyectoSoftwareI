var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');


var app = express();

//EJS.
app.set('view engine', 'ejs');

//Ésto es para usar HTML con datos dinámicos.
app.set('views', path.join(__dirname, 'resources'));

//Middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Ésto es para usar HTML de manera estática.
  //app.use(express.static(path.join(__dirname, 'public')));

//Utilizando el index.ejs
app.get('/', function(req, res){
  res.render('index', {
    world: 'Mundo'
  });
});

//Utilizando el puerto 3000.
app.listen(3000, function() {
  console.log('Se ha iniciado el servidor en el puerto 3000.');
})
