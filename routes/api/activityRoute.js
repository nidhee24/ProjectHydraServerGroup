const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

let Activity = require('../../model/activity');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const activities = await Activity.find();
        res.send(activities);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).send('activity not found');
        }
        res.send(activity);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.post('/', auth,
    [
        check('firstname', 'pls type your first name').not().isEmpty(),
        check('lastname', 'pls type your last name').not().isEmpty(),
        check('email', 'pls type your email').isEmail(),
        check('phone', 'pls type your contact number').not().isEmpty(),
        check('activity', 'Enter the Activity').not().isEmpty(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const newActivity = new Activity({
                user: req.user.id,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                activity: req.body.activity,
            });

            const result = await newActivity.save();

            res.send(result);
        } catch (err) {
            res.status(500).send('Server error');
        }
    })


router.delete('/', auth, async (req, res) => {
    try {
        const activity = await Activity.findById(req.body.id);
        if (!activity) {
            return res.status(404).json({ msg: 'activity not found' });
        }
        const result = await Activity.findByIdAndDelete(req.body.id);
        res.send(result);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


router.put('/', auth, [
    check('firstname', 'pls type your first name').not().isEmpty(),
    check('lastname', 'pls type your last name').not().isEmpty(),
    check('email', 'pls type your email').isEmail(),
    check('phone', 'pls type your contact number').not().isEmpty(),
    check('activity', 'Enter the Activity').not().isEmpty(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const activity = await Activity.findById(req.body.id);
        if (!activity) {
            return res.status(404).json({ msg: 'activity not found' });
        }

        activity.firstname = req.body.firstname;
        activity.lastname = req.body.lastname;
        activity.email = req.body.email;
        activity.phone = req.body.phone;
        await activity.save();
        res.send(activity);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
