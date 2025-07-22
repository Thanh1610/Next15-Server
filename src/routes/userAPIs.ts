import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.status(200).json('Hello world Api');
});

export default userRouter;
