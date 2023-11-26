const verifyUser = require('../../middlewares/verifyUser');
const User = require('../../models/users');
const router = require('express').Router();

router.post('/users', async (req, res, next) => {
    try {
        const userData = new User(req.body);
        const result = await userData.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/users/:email', verifyUser, async (req, res, next) => {
    try {
        const result = await User.findOne({email: req.params.email}).select({_id: 1});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.put('/users', async (req, res, next) => {
    try {
        const userData = req.body;
        const result = await User.updateOne({email: userData.email}, {$set: {...userData}}, {upsert: true});
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.get('/users', async (req, res, next) => {
    try {
        const result = await User.find().skip(1);
        res.send(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;