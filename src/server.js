const express = require('express')
const dotenv = require('dotenv')

//Controllers...
const authController = require('./controllers/authController.js')
const freelancerController = require('./controllers/freelancerController.js')
const proposalController = require('./controllers/proposalController.js')
const profileController = require('./controllers/profileController.js')

//Middlewares
const trimBody = require('./middlewares/trimBody.js')
const session = require('./middlewares/session.js')

const configExpress = require('./config/express-configuration')
const configDatabase = require('./config/database_config')

const app = express();
dotenv.config();

configExpress(app);
configDatabase(app);

app.use(trimBody())
app.use(session())

app.get('/', (req,res)=>{
    res.json({
        message: 'REST service operational!'
    })
});

app.use('/users', authController)
app.use('/freelancersData', freelancerController)
app.use('/proposalsData', proposalController)
app.use('/profileData', profileController)


