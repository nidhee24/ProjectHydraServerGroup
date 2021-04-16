const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


let Review = require('../../model/Review')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rest = await Review.find();
    res.send(rest);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const rest = await Review.findById(req.params.id);
    if (!rest) {
      return res.status(404).send('Car not found');
    }
    res.send(rest);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post(
  '/',auth,

  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'email is required').not().isEmpty(),
    
  ],
  async (req, res) => {
    try {
      const insertRest = new Review ({
        name: req.body.name,
        email: req.body.email,
        feedback: req.body.feedback,
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
    const rest = await Review.findById(req.body.id);
    if (!rest) {
      return res.status(404).json({ msg: 'Task not found' });
    }
  //   carList = carList.filter((t) => t.id !== req.body.id);
  const result = await Review.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;