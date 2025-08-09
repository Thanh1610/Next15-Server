import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT) || 3001,
  MONGO_DB_URL: process.env.MONGO_DB_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || '',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || '',
};
