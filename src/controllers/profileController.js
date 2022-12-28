const { hasUser } = require("../middlewares/guards.js");
const { create } = require("../services/freelancerService.js");
const parseError = require("../util/parser.js");
const router = require('express').Router()

router.get('/userInfo', hasUser(), async (req,res)=> {
    try{
        const userEmail = req.user.email;
        const userId = req.user._id
        res.json({ email: userEmail, _id: userId })
    }catch (err) {
        const message = parseError(err)
        res.status(400).json({message})
    }
})


module.exports = router;