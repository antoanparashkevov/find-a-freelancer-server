const mongoose = require('mongoose')
const app = require('../server')
const DEFAULT_PORT = require('../constants/app_constants')

const configDatabase = (app) => {
    mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(DEFAULT_PORT, () =>
            console.log(`Server is listening on: http://localhost:${DEFAULT_PORT}`)
        ))
        .catch((error) => console.log(error));
}

module.exports = configDatabase