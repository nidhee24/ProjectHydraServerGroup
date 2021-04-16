const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


let Rental = require('../../model/Rental')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rent = await Rental.find();
    res.send(rent);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const rent = await Rental.findById(req.params.id);
    if (!rent) {
      return res.status(404).send('Property not found');
    }
    res.send(rent);
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
      const insertRent = new Rental ({
        title: req.body.title,
        location: req.body.location,
        tariff: req.body.tariff,
      });
      const result = await insertRent.save();
      res.send(result)
      
    } catch (err) {
      res.status(500).send('Server error- Post');
    }
  }
);

router.delete('/', async(req, res) => {
  try {
    const rent = await Rental.findById(req.body.id);
    if (!rent) {
      return res.status(404).json({ msg: 'Property not found' });
    }
  
  const result = await Rental.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;