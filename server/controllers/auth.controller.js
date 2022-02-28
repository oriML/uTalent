const jwt = require('jsonwebtoken')
const authService = require('../services/auth.service')
const catchAsync = require('../utils/catchAsync');

// const imgService = require('../services/imgService')

// ------ fetch function. Sends the request automatically to custom catch errors function ------

const authUser = catchAsync(async (req, res) => {

    //call to service -> add user
    const { user } = req.body;
    console.log(user)
    
    // jwt.sign({user}, 'secretkey',(err, token) => {
    //     res.status(200).json({
    //         token
    //     })
    // })

});


const verifyToken = catchAsync(async (req, res, next) =>{
    
    const result = authService.verifyToken(req, res, next);

    res.status(200).json({
        message: 'Auth completed'
    })

})

module.exports = {
    authUser,
    verifyToken
}

