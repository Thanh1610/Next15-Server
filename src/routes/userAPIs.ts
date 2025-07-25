import express from 'express';
import { createUser, handleLogin } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.status(200).json('Hello world Api');
});

userRouter.post('/register', createUser);
userRouter.post('/login', handleLogin);

export default userRouter;
