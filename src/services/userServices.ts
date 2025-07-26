import User from '../models/user';
import type { UserRegisterInput, UserLoginInput } from '../types/user.type';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const createUserService = async (userData: UserRegisterInput) => {
  try {
    const { name, email, password, phone } = userData;

    const user = await User.findOne({ email });

    if (user) {
      console.log(`Email đã tồn tại, vui lòng dùng email khác ${email}`);
      return {
        status: 'ERR',
        message: 'Email đã được sử dụng, vui lòng chọn email khác',
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
        message: 'email/password không hợp lệ!',
      };
    }

    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return {
        status: 'ERR',
        message: 'email/password không hợp lệ!',
      };
    } else {
      return {
        status: 'SUCCESS',
        message: 'Đăng nhập thành công!',
        data: {
          email: user.email,
          name: user.name,
          id: user._id,
          role: user.role,
        },
      };
    }
  } catch (error) {
    console.error('Login Error:', error);
    return {
      status: 'ERR',
      message: 'Lỗi server. Vui lòng thử lại sau.',
    };
  }
};
export { createUserService, loginServices };
