var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bloqueModel = new Schema ({
  "dia"    :String,
  "puerta" :String,
  "inicioH":Date,
  "finalH" :Date
});

var horarioModel = new Schema ({
  "materia":String,
  "bloque" :[bloqueModel]
});

module.exports = mongoose.model("Horario", horarioModel);
