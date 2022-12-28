const express = require('express')
// const cors = require('cors') //not used yet
const corsMiddleware = require('../middlewares/cors.js')

const configExpress = (app) => {
    app.use(corsMiddleware());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

module.exports = configExpress