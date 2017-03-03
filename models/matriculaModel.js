var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matriculaModel = new Schema ({
  "_id"    :String,
  "materia":String,
  "persona":String
});

module.exports = mongoose.model("Matricula", matriculaModel);
