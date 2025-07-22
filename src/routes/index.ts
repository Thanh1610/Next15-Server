import { Application } from 'express';
import userRouter from './userApis';

const routes = (app: Application) => {
  app.use('/api/user', userRouter);
};

export default routes;
