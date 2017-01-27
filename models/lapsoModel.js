var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var lapsoModel = new Schema ({
  "id"     :String,
  "periodo":String,
  "materia":String,
  "seccion":Number
});

module.exports = mongoose.model("Lapso", lapsoModel);
