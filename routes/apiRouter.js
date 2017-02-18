var express =  require ('express');
var apiController = require ('./../controllers/apiController');
var apiRouter = express.Router();

apiRouter.route('')
  .get(apiController.get)
  .post(apiController.add);

apiRouter.route('/id=:id')
  .put(apiController.update)
  .get(apiController.getById)
  .delete(apiController.del);

module.exports = apiRouter;
