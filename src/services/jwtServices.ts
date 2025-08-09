import jwt from 'jsonwebtoken';
import { env } from '../config/environment';

export const genneralAccessToken = async (payload: any) => {
  if (!env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const token = jwt.sign(payload, env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

export const genneralRefreshToken = async (payload: any) => {
  if (!env.JWT_REFRESH_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  const refresh_token = jwt.sign(payload, env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
  return refresh_token;
};
