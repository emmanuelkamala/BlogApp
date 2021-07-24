import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

const authRouter = express.Router();

// REGISTER

authRouter.post('/register', async (req, res) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    })
    
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({error: error.message });
  }
})

export default authRouter;