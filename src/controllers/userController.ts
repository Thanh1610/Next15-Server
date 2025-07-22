import { Request, Response } from 'express';
import { createUserService } from '../services/userServices';
import { userRegisterSchema } from '../validators/user.validator';

const createUser = async (req: Request, res: Response) => {
  const parsed = userRegisterSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors;
    return res.status(400).json({
      status: 'ERR',
      errors,
    });
  }

  const userData = parsed.data;
  try {
    const data = await createUserService(userData);

    if (!data) {
      return res.status(400).json({
        status: 'ERR',
        message: 'Email đã tồn tại!',
      });
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error('createUser error:', error);
    return res.status(500).json({ status: 'ERR', message: 'Đã xảy ra lỗi máy chủ' });
  }
};

export { createUser };
