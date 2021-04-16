const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
//const cars = require('../../model/Restaurant');

// let carList = require('../../data/cars');

let Restaurant = require('../../model/Restaurant')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rest = await Restaurant.find();
    res.send(rest);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const rest = await Restaurant.findById(req.params.id);
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
      const insertRest = new Restaurant ({
        name: req.body.name,
        Location: req.body.Location,
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
    const rest = await Restaurant.findById(req.body.id);
    if (!rest) {
      return res.status(404).json({ msg: 'Task not found' });
    }
  //   carList = carList.filter((t) => t.id !== req.body.id);
  const result = await Restaurant.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.put('/', async(req, res) => {
  try {
    const Rest = await Restaurant.findByIdAndUpdate(req.body.id);
    if (!Rest) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    Rest.id = req.body.id;
    Rest.name = req.body.name;
    Rest.Location = req.body.Location;
    Rest.img = req.body.img;
    await Rest.save();
    res.send(Rest)
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;