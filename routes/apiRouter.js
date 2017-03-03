var express =  require ('express');
var apiController = require ('./../controllers/apiController');
var apiRouter = express.Router();

apiRouter.route('/')
  .get(apiController.get)
  .post(apiController.add);

apiRouter.route('/:id')
  .get(apiController.getById);

module.exports = apiRouter;
