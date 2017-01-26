var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "id"   :String,
  "title":String
});

module.exports = mongoose.model("Api", apiModel);
