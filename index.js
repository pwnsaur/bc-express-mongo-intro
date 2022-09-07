import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userModel from './userModel.js';

const app = express();
const port = 1337;

dotenv.config();
app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connection to mongoDB is successfull!');
  } catch (error) {
    throw error;
  }
};

app.post('/create', async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send('New user is created');
  } catch (error) {
    res.status(501).send(error);
    throw error;
  }
});

app.listen(port, () => {
  connectionToDB();
  console.log(`serving @ ${port}`);
});
