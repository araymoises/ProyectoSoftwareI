var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var materiaModel = new Schema ({
  "_id"    :String,
  "nombre" :String
});

module.exports = mongoose.model("Materia", materiaModel);
