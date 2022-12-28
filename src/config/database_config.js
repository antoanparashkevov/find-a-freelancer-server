const mongoose = require('mongoose')

const configDatabase = async (app) => {
    try {
        //process.env.CONNECTION_URL
        await mongoose.connect('mongodb://localhost:27017/freelancers', 
          { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('MongoDB connected')
    } catch (error) {
        console.log('It has an error from MongoDB client')  
        console.error(error)
        process.exit(1)
    }
}

module.exports = configDatabase