import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Post from '../models/Post.js';

const userRouter = express.Router();

// UPDATE

userRouter.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) { 
    if (req.body.password){
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, { new: true});
      res.status(200).json('User has been updated');
    } catch (error) {
      res.status(500).json({error: error.message });
    }
  } else {
    res.status(401).json("You can only update your account");
  }
 }
)

// DELETE 

userRouter.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) { 
    try {
      const user = await User.findById(req.params.id);
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User has been deleted');
      } catch (error) {
        res.status(500).json({error: error.message });
      }
    } catch (error) {
      res.status(404).json('User not found');
    }
   
  } else {
    res.status(401).json("You can only delete your account");
  }
 }
)

// GET USER

userRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
})


export default userRouter;