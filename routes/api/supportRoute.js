const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

let Support = require('../../model/support');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const supports = await Support.find();
        res.send(supports);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const support = await Support.findById(req.params.id);
        if (!support) {
            return res.status(404).send('support not found');
        }
        res.send(support);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

router.post('/', auth,
    [
        check('name', 'pls type your first name').not().isEmpty(),
        check('email', 'pls type your email').isEmail(),
        check('subject', 'pls type subject of your query').not().isEmpty(),
        check('query', 'pls enter the query you have......').not().isEmpty(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({ errors: errors.array() });
            }
            const newSupport = new Support({
                user: req.user.id,
                name: req.body.name,
                email: req.body.email,
                subject: req.body.subject,
                query: req.body.query,
            });

            const result = await newSupport.save();

            res.send(result);
        } catch (err) {
            res.status(500).send('Server error');
        }
    })


router.delete('/', auth, async (req, res) => {
    try {
        const support = await Support.findById(req.body.id);
        if (!support) {
            return res.status(404).json({ msg: 'Support not found' });
        }
        const result = await Support.findByIdAndDelete(req.body.id);
        res.send(result);
    } catch (err) {
        res.status(500).send('Server error');
    }
});


router.put('/', auth, [
    check('name', 'pls type your first name').not().isEmpty(),
    check('email', 'pls type your email').isEmail(),
    check('subject', 'pls type subject of your query').not().isEmpty(),
    check('query', 'pls enter the query you have......').not().isEmpty(),
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const support = await Support.findById(req.body.id);
        if (!support) {
            return res.status(404).json({ msg: 'support not found' });
        }

        support.name = req.body.name;
        support.email = req.body.email;
        support.subject = req.body.subject;
        support.query = req.body.query;
        await support.save();
        res.send(support);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
