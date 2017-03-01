var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "_id"   : String,
  "title":String
});

module.exports = mongoose.model("Api", apiModel);
