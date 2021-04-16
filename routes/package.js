const express = require('express');
const router = express.Router();
let packages = require('../model/package');

router.get('/allPackages',
async (req, res) => {
    try {
        const packageDB = await packages.find();
        res.send(packageDB);
      } catch (err) {
        res.status(500).send('Server error');
      }

}
)

router.get('/:id', async (req, res) => {
    try {
      const package = await packages.findById(req.params.id);
      if (!package) {
        return res.status(404).send('Package not found');
      }
      res.send(package);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
module.exports = router;