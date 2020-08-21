import { Router } from 'express';
import userController from './userController';
import loginValidation from './userValidations';

const route = Router();

route.get('/', function (req,res)  {
    res.send('API Running. ' + Date());
});
route.get('/users', userController.getAutoSuggestUsers);
route.get('/users/:id', userController.findUserById);
route.get('/users/:login', userController.findUserByLogin);
route.post('/users', loginValidation.isUserShchemaValid, userController.create);
route.put('/users/:id', loginValidation.isUserShchemaValid, userController.update);
route.delete('/users/:id', userController.delete);

module.exports = route;

