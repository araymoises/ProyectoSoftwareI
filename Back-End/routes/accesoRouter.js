var express =  require ('express');
var accesoController = require ('./../controllers/accesoController');
var accesoRouter = express.Router();

accesoRouter.route('')
  .get(accesoController.get)
  .post(accesoController.add);

accesoRouter.route('/:id')
  .get(accesoController.getById)
  .delete(accesoController.del)
  .put(accesoController.update);

module.exports = accesoRouter;
