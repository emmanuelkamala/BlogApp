import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';

const app = express();
dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(console.log('Connected to MongoDB'))
.catch(error => console.log(error))

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.listen(5000, console.log('Server is running'));