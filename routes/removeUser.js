const express = require('express');
const router = express.Router();
let User = require('../model/user');
const auth = require('../middleware/auth');
router.post('/delete', auth,
async (req, res) => {
    try {
      const user = await User.findById(req.body.id);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      console.log(user);
      const result = await User.findByIdAndDelete({ _id: req.body.id });
      console.log(result);
      res.send(result);
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  })
  module.exports = router;