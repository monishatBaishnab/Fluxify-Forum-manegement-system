const User = require("../models/users");

const verifyAdmin = async (req, res, next) => {
    try {
        
        const user = req.user;
        const result = await User.findOne({ email: user.email });

        if (result?.role !== 'admin') {
            return res.status(401).send({ message: 'unauthorized access' })
        }
        next();

    } catch (error) {
        next(error);
    }
}

module.exports = verifyAdmin;