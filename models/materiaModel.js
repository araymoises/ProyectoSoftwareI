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
  "seccion" :[{"_id"     : String,
               "docente" : String,
               "horario" : [{
                              "h_Entrada" : Date,
                              "h_Salida"  : Date,
                              "dia"       : Number,
                              "aula"      : String
                            }]
             }],
  "nivel":{ type: String,
            required:true
          }
});

module.exports = mongoose.model("Materia", materiaModel);
