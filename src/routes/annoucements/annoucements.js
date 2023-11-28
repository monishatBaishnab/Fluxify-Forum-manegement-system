const verifyAdmin = require('../../middlewares/verifyAdmin');
const verifyUser = require('../../middlewares/verifyUser');
const Announcement = require('../../models/annoucement');

const router = require('express').Router();

router.get('/annoucements', async (req, res, next) => {
    try {
        const result = await Announcement.find();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

router.post('/annoucements',verifyUser, verifyAdmin, async (req, res, next) => {
    try {
        const annoucementData = Announcement(req.body);
        const result = await annoucementData.save();
        res.send(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;