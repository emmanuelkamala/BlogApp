import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';

const app = express();
dotenv.config()
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(console.log('Connected to MongoDB'))
.catch(error => console.log(error))

app.use('/api/auth', authRouter);

app.listen(5000, console.log('Server is running'));