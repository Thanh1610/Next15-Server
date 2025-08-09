import User from '../models/user';
import type { UserRegisterInput, UserLoginInput } from '../types/user.type';
import bcrypt from 'bcrypt';
import { genneralAccessToken, genneralRefreshToken } from './jwtServices';

const saltRounds = 10;

const createUserService = async (userData: UserRegisterInput) => {
  try {
    const { name, email, password, phone } = userData;

    const user = await User.findOne({ email });

    if (user) {
      console.log(`Email already exists, please use another one: ${email}`);
      return {
        status: 'ERR',
        message: 'Email has already been used, please choose another one.',
      };
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const res = await User.create({ name, email, password: hashPassword, phone });
    return {
      status: 'SUCCESS',
      message: 'Đăng ký thành công!',
      data: {
        id: res._id,
        name: res.name,
        email: res.email,
        phone: res.phone,
        role: res.role,
        createdAt: res.createdAt,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

const loginServices = async ({ email, password }: UserLoginInput) => {
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return {
        status: 'ERR',
        message: 'Invalid email or password!',
      };
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return {
        status: 'ERR',
        message: 'Invalid email or password!',
      };
    } else {
      const payload = {
        email: user.email,
        name: user.name,
        id: user._id,
        role: user.role,
      };
      const access_token = await genneralAccessToken(payload);
      const refresh_token = await genneralRefreshToken(payload);
      return {
        status: 'SUCCESS',
        message: 'Login successful!',
        data: {
          email: user.email,
          name: user.name,
          id: user._id,
          role: user.role,
        },
        access_token,
        refresh_token,
      };
    }
  } catch (error) {
    console.error('Login Error:', error);
    return {
      status: 'ERR',
      message: 'Server error. Please try again later.',
    };
  }
};

export { createUserService, loginServices };
