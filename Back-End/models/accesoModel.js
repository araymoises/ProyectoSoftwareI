var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accesoModel = new Schema ({
  "_id"    :String,
  "persona":String,
  "hora"   :String,
  "tipo_ES":Boolean
});

module.exports = mongoose.model("Acceso", accesoModel);
