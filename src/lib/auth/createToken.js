const jwt = require("jsonwebtoken");
require('dotenv').config();

const createToken = (user) => {
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
    return token;
}

module.exports = createToken