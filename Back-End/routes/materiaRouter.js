var express =  require ('express');
var materiaController = require ('./../controllers/materiaController');
var materiaRouter = express.Router();

materiaRouter.route('')
  .get(materiaController.get)
  .post(materiaController.add);

materiaRouter.route('/:id')
  .get(materiaController.getById);

module.exports = materiaRouter;
