var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "title":String
});

module.exports = mongoose.model("Api", apiModel);
