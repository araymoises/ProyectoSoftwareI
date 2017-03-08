var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tipopModel = new Schema ({
  "_id"         :String,
  "nombre"      :String,
  "restriccion" :[String],
});

module.exports = mongoose.model("Tipo_P", tipopModel);
