import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const userRouter = express.Router();

// UPDATE

userRouter.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) { 
    if (req.body.password){
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({error: error.message });
    }
  } else {
    res.status(401).json("You can only update your account");
  }
 }
)




export default userRouter;