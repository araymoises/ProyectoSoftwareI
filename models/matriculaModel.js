var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matriculaModel = new Schema ({
  "_id"     :String,
  "materia" :[{ "_id":String,       /* identificador de la materia el cual proviene del M. materia*/
                "seccion":Number    /* id de la seccion, con eso podemos saber el docente */
             }],
  "persona" :String                 /* Cedula del alumno */
});

module.exports = mongoose.model("Matricula", matriculaModel);
