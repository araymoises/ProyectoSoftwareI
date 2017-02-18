var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "_id"   :{ type: String,
            index: true,
            required:true
          },
  "title":String
});

module.exports = mongoose.model("Api", apiModel);
