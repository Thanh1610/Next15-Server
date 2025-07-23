import { z } from 'zod';
import { userRegisterSchema, userLoginSchema } from '../validators/userValidator';

// export interface UserResponse {
//   _id: string;
//   name: string;
//   email: string;
//   phone: string;
//   avatar?: string;
//   address?: string;
//   isAdmin: boolean;
//   createdAt: string;
// }
export type UserRegisterInput = z.infer<typeof userRegisterSchema>;

export type UserLoginInput = z.infer<typeof userLoginSchema>;
