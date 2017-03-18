var express =  require ('express');
var accesoController = require ('./../controllers/accesoController');
var accesoRouter = express.Router();

accesoRouter.route('/:id')
  .get(accesoController.check);

module.exports = accesoRouter;
