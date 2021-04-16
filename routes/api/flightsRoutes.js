const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


let FlightsBooking = require('../../model/FlightsBooking')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const flb = await FlightsBooking.find();
    res.send(flb);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const flb = await FlightsBooking.findById(req.params.id);
    if (!flb) {
      return res.status(404).send('Flight Booking not found');
    }
    res.send(flb);
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
      const insertFlb = new FlightsBooking ({
        flight_name: req.body.flight_name,
        departure_arrival: req.body.departure_arrival,
        price: req.body.price,
      });
      const result = await insertFlb.save();
      res.send(result)
      
    } catch (err) {
      res.status(500).send('Server error- Post');
    }
  }
);

router.delete('/', async(req, res) => {
  try {
    const flb = await FlightsBooking.findById(req.body.id);
    if (!flb) {
      return res.status(404).json({ msg: 'Flight Booking not found' });
    }
  
  const result = await FlightsBooking.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;