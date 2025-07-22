import { Application } from 'express';
import userRouter from './userAPIs';

const routes = (app: Application) => {
  app.use('/v1/api/user', userRouter);
};

export default routes;
