const express = require('express');
const uuid = require('uuid');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


let Payment = require('../../model/Payment')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pay = await Payment.find();
    res.send(pay);
    
  } catch (err) {
    res.status(500).send('Server error'); 
  }
});

router.get('/:id', async(req, res) => {
  try {
    const pay = await Payment.findById(req.params.id);
    if (!pay) {
      return res.status(404).send('Payment not found');
    }
    res.send(pay);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.post(
  '/',auth,

  [
    check('first_Name', 'first_Name is required').not().isEmpty(),   
  ],
  async (req, res) => {
    try {
      const insertPay = new Payment ({
        first_Name: req.body.first_Name,
        last_Name: req.body.last_Name,
        address: req.body.address,
        city: req.body.city,
        province: req.body.province,
        country: req.body.country,
        zip_code: req.body.zip_code,
      });
      const result = await insertPay.save();
      res.send(result)
      
    } catch (err) {
      res.status(500).send('Server error- Post');
    }
  }
);

router.delete('/', async(req, res) => {
  try {
    const pay = await Payment.findById(req.body.id);
    if (!pay) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
  //   carList = carList.filter((t) => t.id !== req.body.id);
  const result = await Payment.findByIdAndDelete(req.body.id)
  res.send(result);
  
  } catch (err) {
    res.status(500).send('Server error');
  }
});



module.exports = router;