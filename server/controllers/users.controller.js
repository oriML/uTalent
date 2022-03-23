const catchAsync = require('../utils/catchAsync');
const usersService = require('../services/users.service')
const cardsService = require('../services/cards.service')
const cloudinaryService = require('../services/cloudinary.service')
const admin = require('../config/firebase-config')
// ------ fetch function. Sends the request automatically to custom catch errors function ------

// ** photos uploads after user created with minimum details. That will make the cloudinary only from update user call. ** //

const getUser = catchAsync(async (req, res) => {
    // get also the cards its refers to
    
    const { email } = req.query;

    const user = await usersService.fetchUser(email)
    .then(result => {
        if(result.length>0) return {...result[0]._doc}
        else
        res.status(404).json({
            message: "get-user/failed",
            status: false,
        })
    }
    )
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            message: `ERROR: ${err}`,
            state:false
        })
    }
    )
    const urls = await cardsService.getCardsOfUser(user.cards)

    res.status(200).json({
        message: "get-user/successfull",
        status: true,
        user: { ...user, ["cards"]: urls}
    })

});


const addUser = catchAsync(async (req, res) => {
    
    await usersService.insertUser(req.body)
    .then(result =>   
            res.status(200).json({
                message: "add-user/successfull",
                state: true,
                data: result
            })
    )
    .catch(err =>
            res.status(500).json({
                message: `ERROR: ${err}`,
                state:false
            })
    )

}); 

    
const editUser = catchAsync(async (req, res) => {

    // call also for edit the cards its refers to
    
        await usersService.updateUser(req.query, req.body)
        .then(result =>   
            res.status(200).json({
                message: "update-user/successfull",
                state: true,
                data: result
            })
            )
            .catch(err =>
                res.status(500).json({
                    message: `ERROR: ${err}`,
                    state:false
                })
                )
                
})        


const deleteUser = catchAsync(async (req, res) => {
// delete its cards also
    console.log(req.query)
        // 
        await usersService.removeUser(req.query)
        .then(result =>   {

            res.status(200).json({
                message: "delete-user/successfull",
                state: true,
                data: result
            })
        }
        )
        .catch(err =>
                res.status(500).json({
                    message: `ERROR: ${err}`,
                    state:false
                })
        )
            
})


module.exports = {
            getUser,
            addUser,
            deleteUser,
            editUser
}