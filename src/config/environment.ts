import 'dotenv/config';

export const env = {
  PORT: Number(process.env.PORT) || 3001,
  MONGO_DB_URL: process.env.MONGO_DB_URL,
};
