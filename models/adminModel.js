var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var adminModel = new Schema ({
  "_id"        :String,
  "user"      :String,
  "password"  :String,
  "persona"   :String,
  "cedula"    :String,
  "nombre"    :String,
  "apellido"  :String,
  "super"     :Boolean
});

module.exports = mongoose.model("Admin", adminModel);
