//Main modules
const express = require('express')
const dotenv = require('dotenv')

const PORT = process.env.PORT | 9000

//Config
const configExpress = require('./config/express-configuration.js')
const configDatabase = require('./config/database_config.js')
const configRoutes = require('./config/routes_configuration')

const app = express();
dotenv.config();

configExpress(app);
//Routes go here
configRoutes(app)

//connect to database before listening
configDatabase(app).then(()=>{
    app.listen(PORT, ()=> console.log('Server listening on port', PORT))
});