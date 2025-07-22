import mongoose from 'mongoose';
import { env } from './environment';

const dbState = [
  {
    value: 0,
    label: 'Disconnected',
  },
  {
    value: 1,
    label: 'Connected',
  },
  {
    value: 2,
    label: 'Connecting',
  },
  {
    value: 3,
    label: 'Disconnecting',
  },
];

export const connection = async () => {
  await mongoose.connect(env.MONGO_DB_URL as string);
  const state = Number(mongoose.connection.readyState);
  const found = dbState.find((f) => f.value === state);
  console.log(found ? found.label : 'Unknown', 'to database');
};
