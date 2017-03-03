var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var apiModel = new Schema ({
  "_id"   :{ type: String,
            index: true,
            required:true
          },
  "title":{ type: String
          },
});

module.exports = mongoose.model("Api", apiModel);
