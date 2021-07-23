import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(console.log('Connected to MongoDB'))
.catch(error => console.log(error))
app.listen(5000, console.log('Server is running'));