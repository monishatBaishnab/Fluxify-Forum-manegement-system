const verifyUser = require('../../middlewares/verifyUser');
const User = require('../../models/users');

const router = require('express').Router();

router.get('/is-admin', verifyUser, async (req, res, next) => {
    const user = req.user;
    const result = await User.findOne({email: user.email});
    
    res.send({isAdmin: result?.role === 'admin'});
})

module.exports = router;