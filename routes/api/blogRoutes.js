const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


let Blog = require('../../model/Blog')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rest = await Blog.find();
    res.send(rest);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const rest = await Blog.findById(req.params.id);
    if (!rest) {
      return res.status(404).send('Blog not found');
    }
    res.send(rest);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post(
  '/',auth,

  [
    check('title', 'title is required').not().isEmpty(),
    
    
  ],
  async (req, res) => {
    try {
      const insertRest = new Blog ({
        title: req.body.title,
        blog: req.body.blog,
        img: req.body.img,
      });
      const result = await insertRest.save();
      res.send(result)
      
    } catch (err) {
      res.status(500).send('Server error- Post');
    }
  }
);

router.delete('/', async(req, res) => {
  try {
    const rest = await Blog.findById(req.body.id);
    if (!rest) {
      return res.status(404).json({ msg: 'Task not found' });
    }
  //   carList = carList.filter((t) => t.id !== req.body.id);
  const result = await Blog.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;