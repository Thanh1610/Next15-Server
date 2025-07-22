import app from './app';
import express from 'express';
import { env } from './config/environment';
import { connection } from './config/database';
import routes from './routes';

const PORT = env.PORT || 3001;

routes(app);

(async () => {
  try {
    await connection();
    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running at http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.log('>>> Error connect to DB: ', error);
  }
})();
