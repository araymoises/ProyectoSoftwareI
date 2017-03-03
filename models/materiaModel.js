var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var materiaModel = new Schema ({
  "_id"     :{ type: String,
             index: true,
             required:true
           },
  "nombre"  :{ type: String,
             required:true
           },
  "semestre":{ type: String,
            required:true
          }
});

module.exports = mongoose.model("Materia", materiaModel);
