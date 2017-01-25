var express =  require ('express');
var apiController = require ('./../controllers/apiController');
var apiRouter = express.Router();

apiRouter.route('')
  .get(apiController.get)
  .post(apiController.add);


module.exports = apiRouter;
