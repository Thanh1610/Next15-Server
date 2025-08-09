import { Request, Response } from 'express';
import { createUserService, loginServices } from '../services/userServices';
import { userLoginSchema, userRegisterSchema } from '../validators/userValidator';
import { validate } from '../validators/validateSchema';

const createUser = async (req: Request, res: Response) => {
  const userData = validate(userRegisterSchema, req.body, res);
  if (!userData) return;

  try {
    const data = await createUserService(userData);

    if (!data) {
      return res.status(400).json({
        status: 'ERR',
        message: 'Email already exists!',
      });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error('createUser error:', error);
    return res.status(500).json({
      status: 'ERR',
      message: 'Internal server error',
    });
  }
};

const handleLogin = async (req: Request, res: Response) => {
  try {
    const parsed = validate(userLoginSchema, req.body, res);
    if (!parsed) return;

    const { email, password } = parsed;
    const data = await loginServices({ email, password });

    return res.status(200).json(data);
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      status: 'ERR',
      message: 'Internal server error',
    });
  }
};

export { createUser, handleLogin };
