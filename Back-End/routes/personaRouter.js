var express =  require ('express');
var personaController = require ('./../controllers/personaController');
var personaRouter = express.Router();

personaRouter.route('')
  .get(personaController.get)
  .post(personaController.add);

personaRouter.route('/:id')
  .get(personaController.getById);

module.exports = personaRouter;
