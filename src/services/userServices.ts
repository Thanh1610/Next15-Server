import User from '../models/user';
import type { UserRegisterInput } from '../types/user.type';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const createUserService = async (userData: UserRegisterInput) => {
  try {
    const { name, email, password, phone } = userData;

    const user = await User.findOne({ email });

    if (user) {
      console.log(`Email đã tồn tại, vui lòng dùng email khác ${email}`);
      return null;
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    return await User.create({ name, email, password: hashPassword, phone });
  } catch (error) {
    console.log(error);
    return null;
  }
};
export { createUserService };
