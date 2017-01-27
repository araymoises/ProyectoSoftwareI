var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var horarioModel = new Schema ({
  "materia":String,
  "dia"    :String,
  "inicioH":Date,
  "finalH" :Date
});

module.exports = mongoose.model("Horario", horarioModel);
