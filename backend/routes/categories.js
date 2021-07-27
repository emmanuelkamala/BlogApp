import express from 'express';
import Category from '../models/Category.js';

const categoryRouter = express.Router();

// CREATE 
categoryRouter.post('/', async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (error) {
    res.status(500).json(error);
  }
})



// GET ALL CATEGORIES
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



export default categoryRouter;