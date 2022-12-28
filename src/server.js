const express = require('express')
const dotenv = require('dotenv')
const PORT = process.env.PORT | 3000

//Controllers...
const authController = require('./controllers/authController.js')
const freelancerController = require('./controllers/freelancerController.js')
const proposalController = require('./controllers/proposalController.js')
const profileController = require('./controllers/profileController.js')

//Middlewares
const trimBody = require('./middlewares/trimBody.js')
const session = require('./middlewares/session.js')

const configExpress = require('./config/express-configuration.js')
const configDatabase = require('./config/database_config.js')

const app = express();
dotenv.config();

configExpress(app);

app.use(trimBody())
app.use(session())

app.get('/', (req,res)=>{
    res.json({
        message: 'REST service operational!'
    })
});

//Routes go here
app.use('/users', authController)
app.use('/freelancersData', freelancerController)
app.use('/proposalsData', proposalController)
app.use('/profileData', profileController)

//connect to database before listening
configDatabase(app).then(()=>{
    app.listen(PORT, ()=>console.log('Server listening on port', PORT))
});