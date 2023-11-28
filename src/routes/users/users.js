const verifyUser = require('../../middlewares/verifyUser');
const User = require('../../models/users');
const router = require('express').Router();

router.get('/users',verifyUser, async (req, res, next) => {
    try {
        const result = await User.find();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/users/:email', verifyUser, async (req, res, next) => {
    try {
        const result = await User.findOne({email: req.params.email});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.post('/users', async (req, res, next) => {
    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.put('/users', async (req, res, next) => {
    try {
        const userData = req.body;
        const result = await User.updateOne({email: req.query.email}, {$set: {...userData}}, {upsert: true});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.patch('/users', async (req, res, next) => {
    try {
        const userData = req.body;
        const result = await User.updateOne({email: req.query.email}, {$set: {...userData}});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;