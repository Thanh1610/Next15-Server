import { z } from 'zod';
import { userRegisterSchema } from '../validators/user.validator';

export type UserRegisterInput = z.infer<typeof userRegisterSchema>;

export interface UserResponse {
  _id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  address?: string;
  isAdmin: boolean;
  createdAt: string;
}
