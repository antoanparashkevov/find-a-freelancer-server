const express = require('express')
// const cors = require('cors') //not used yet
const corsMiddleware = require('../middlewares/cors.js')
const trimBody = require("../middlewares/trimBody");
const session = require("../middlewares/session");

const configExpress = (app) => {
    app.use(corsMiddleware());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(trimBody())
    app.use(session())
}

module.exports = configExpress