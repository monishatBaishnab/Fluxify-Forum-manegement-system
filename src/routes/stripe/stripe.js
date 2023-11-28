require('dotenv').config();
const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post('/create-payment-intent', async (req, res, next) => {
    try {
        const { price } = req.body;
        const amount = parseInt(price) * 100;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card']
        })
        res.send({clientSecret: paymentIntent.client_secret})
    } catch (error) {
        next(error);
    }
})

module.exports = router;