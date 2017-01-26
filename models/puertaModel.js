var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var puertaModel = new Schema ({
  "id"     :String,
  "persona":String,
  "hora"   :String,
  "tipo_ES":Boolean,
});

module.exports = mongoose.model("Puerta", puertaModel);
