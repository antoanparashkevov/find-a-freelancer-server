const mongoose = require('mongoose')
const configDatabase = async (app) => {
    try {
      const connection = mongoose.connect(process.env.CONNECTION_URL, 
          { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('MongoDB connected ', connection.connection.host)
    } catch (error) {
        console.log('It has an error from MongoDB client')
        console.error(error)
        process.exit(1)
    }
}

module.exports = configDatabase