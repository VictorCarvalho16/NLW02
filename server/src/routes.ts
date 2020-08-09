import express from 'express';
import ClassesControllers from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';

import { verifyToken } from './middlewares/authorization';

const routes = express.Router();

const classesControllers = new ClassesControllers();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.get('/classes', verifyToken, classesControllers.index);
routes.post('/classes', verifyToken, classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', verifyToken, connectionsController.create);

routes.post('/users', usersController.create);
routes.post('/users/login', usersController.login);

export default routes;
