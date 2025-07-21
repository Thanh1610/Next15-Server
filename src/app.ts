// src/app.ts
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Node.js backend!');
});

export default app;
