const createToken = require('../../lib/auth/createToken');

const router = require('express').Router();

router.post('/create-token', async (req, res, next) => {
    const user = req.body;
    const token = createToken(user);
    try {
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        }).send({ message: "Token Stored" })
    } catch (error) {
        next(error);
    }
})

router.post('/remove-token', async (req, res, next) => {
    try {
        res.clearCookie('token', {
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        }).send({ message: "Token removed." })
    } catch (error) {
        next(error);
    }
})

module.exports = router;