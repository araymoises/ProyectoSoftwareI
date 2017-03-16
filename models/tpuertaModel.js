var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tpuertaModel = new Schema ({
  "_id"    :String,
  "nombre" :String,
});

module.exports = mongoose.model("Tpuerta", tpuertaModel);
