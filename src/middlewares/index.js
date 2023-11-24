const cors = require('cors');
const express = require('express');
const cookeiParser = require('cookie-parser');
const { LOCAL_CLIENT, PROD_CLIENT } = require('../config/config');

const applyMiddlewores = (app) => {
    app.use(cors({
        origin: [LOCAL_CLIENT, PROD_CLIENT],
        credentials: true
    }));
    app.use(cookeiParser());
    app.use(express.json());
}

module.exports = applyMiddlewores;