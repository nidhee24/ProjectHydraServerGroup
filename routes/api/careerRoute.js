const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

let Career = require('../../model/career');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const careers = await Career.find();
        res.send(careers);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const career = await Career.findById(req.params.id);
        if (!career) {
            return res.status(404).send('career not found');
        }
        res.send(career);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.post('/', auth,
    [
        check('firstname', 'pls type your first name').not().isEmpty(),
        check('lastname', 'pls type your last name').not().isEmpty(),
        check('email', 'pls type your email').isEmail(),
        check('job', 'pls type the job you want to apply for').not().isEmpty(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const newCareer = new Career({
                user: req.user.id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                job: req.body.job,
            });

            const result = await newCareer.save();

            res.send(result);
        } catch (err) {
            res.status(500).send('Server error');
        }
    })


router.delete('/', auth, async (req, res) => {
    try {
        const career = await Career.findById(req.body.id);
        if (!career) {
            return res.status(404).json({ msg: 'career not found' });
        }
        const result = await Career.findByIdAndDelete(req.body.id);
        res.send(result);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


router.put('/', auth, [
    check('firstname', 'pls type your first name').not().isEmpty(),
    check('lastname', 'pls type your last name').not().isEmpty(),
    check('email', 'pls type your email').isEmail(),
    check('job', 'pls type the job you want to apply for').not().isEmpty(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const career = await Career.findById(req.body.id);
        if (!career) {
            return res.status(404).json({ msg: 'career not found' });
        }

        career.firstname = req.body.firstname;
        career.lastname = req.body.lastname;
        career.email = req.body.email;
        career.job = req.body.job;
        await career.save();
        res.send(career);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
