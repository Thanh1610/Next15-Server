import { z } from 'zod';

//Register
export const userRegisterSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Tên phải có ít nhất 2 ký tự' })
      .max(256, { message: 'Tên không được vượt quá 256 ký tự' }),
    email: z.string().email({ message: 'Email không hợp lệ' }),
    password: z
      .string()
      .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
      .max(100, { message: 'Mật khẩu không được vượt quá 100 ký tự' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Xác nhận mật khẩu phải có ít nhất 6 ký tự' })
      .max(100, { message: 'Xác nhận mật khẩu không được vượt quá 100 ký tự' }),
    phone: z
      .string()
      .optional()
      .refine((val) => !val || /^0\d{9}$/.test(val), {
        message: 'Số điện thoại không hợp lệ',
      }),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu không khớp',
    path: ['confirmPassword'],
  });

//Login
export const userLoginSchema = z
  .object({
    email: z.string().trim().email({ message: 'Email không hợp lệ' }),
    password: z
      .string()
      .trim()
      .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' })
      .max(100, { message: 'Mật khẩu không được vượt quá 100 ký tự' }),
  })
  .strict();
