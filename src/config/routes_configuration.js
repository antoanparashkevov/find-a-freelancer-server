const authController = require("../controllers/authController");
const freelancerController = require("../controllers/freelancerController");
const proposalController = require("../controllers/proposalController");
const profileController = require("../controllers/profileController");

module.exports = (app)=> {
    
    app.get('/', (req,res)=>{
        res.json({
            message: 'REST service operational!'
        })
    });
    
    app.get('/admin', (req,res)=>{
        res.json({
            message: 'Admin page requires authentication'
        })
    })
    
    app.use('/users', authController)
    app.use('/freelancersData', freelancerController)
    app.use('/proposalsData', proposalController)
    app.use('/profileData', profileController)
}