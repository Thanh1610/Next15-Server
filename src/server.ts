// src/server.ts
import app from './app';
import dotenv from 'dotenv';
import { env } from './config/environment';

dotenv.config();

const PORT = process.env.PORT || 3001;

app.listen(env.PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${env.PORT}`);
});
