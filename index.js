import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';

const app = express();
const port = 3004;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connection successfull!');
  } catch (error) {
    throw error;
  }
};

app.use('/api', userRouter);

app.listen(port, () => {
  connectionToDB();
  console.log(`serving @ ${port}`);
});
