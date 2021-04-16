const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
let Package = require('../model/package');
const auth = require('../middleware/auth');

router.use('/', auth,
[
    check('name', 'name is required').not().isEmpty(),
    check('description', 'description is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      const package = new Package ({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image1:req.body.image1,
        image2:req.body.image2,
        image3:req.body.image3
      });
      console.log(package);
      const result = await package.save();
      res.send(result);
    } catch (err) {
      res.status(500).send('Server error it is');
      console.log(err);
    }
  })
  module.exports = router;