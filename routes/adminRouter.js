var express =  require ('express');
var adminController = require ('./../controllers/adminController');
var adminRouter = express.Router();

adminRouter.route('')
  .get(adminController.get)
  .post(adminController.add);

adminRouter.route('/:id')
  .get(adminController.getById)
  .delete(adminController.del)
  .put(adminController.update);

module.exports = adminRouter;
