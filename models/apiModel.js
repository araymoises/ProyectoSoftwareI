var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "title":String
});
// apiModel.push({
//   tittle: 'Hola'
// });
module.exports = mongoose.model("Api", apiModel);
