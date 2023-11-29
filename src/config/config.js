require('dotenv').config();

const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    PROD_CLIENT_1: process.env.PROD_CLIENT_1,
    PROD_CLIENT_2: process.env.PROD_CLIENT_2,
}

module.exports = Object.freeze(config);