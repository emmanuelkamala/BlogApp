import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Post from '../models/Post.js';

const postRouter = express.Router();

// CREATE 
postRouter.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.send(500).json(error);
  }
})

// UPDATE

postRouter.put('/:id', async (req, res) => {
  
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          }, { new: true});
          res.status(200).json(updatedPost);
        } catch (error) {
          res.status(404).json('Post not found');
        }
      } else {
        res.status(401).json('You can only update your post(s)');
      }
    } catch (error) {
      res.status(500).json({error: error.message });
    }
  }
)

// DELETE 

postRouter.put('/:id', async (req, res) => {
  
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete()
        res.status(200).json('Post has been deleted ');
      } catch (error) {
        res.status(404).json('Post not found');
      }
    } else {
      res.status(401).json('You can only delete your post(s)');
    }
  } catch (error) {
    res.status(500).json({error: error.message });
  }
}
)


// GET POST

postRouter.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
})

// GET ALL POSTS
postRouter.get('/', async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if(username){
      posts = await Post.find({username});
    } else if(catName) {
      posts = await Post.find({
        categories: {$in: [catName]}
      })
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json(error);
  }
})



export default postRouter;