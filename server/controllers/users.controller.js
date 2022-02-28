const catchAsync = require('../utils/catchAsync');
const usersService = require('../services/users.service')

// ------ fetch function. Sends the request automatically to custom catch errors function ------

const getUser = catchAsync(async (req, res) => {
    // ---> call to service to add user
    // console.log("add user -> ctrlr")
    // console.log("get-user!",req.body)
    // res.status(200)
    await usersService.fetchUser(req.body.user)
    .then(result => {
        console.log(result)
        if(result.length>0)
        res.status(200).json({
            message: "get-user/successfull",
            status: true,
            user: result
        })
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

});


const addUser = catchAsync(async (req, res) => {
    // ---> call to service to add user
    // console.log("add user -> ctrlr")
    console.log(req.body)
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
        // ---> call to service to add user
        // console.log("add user -> ctrlr")
        console.log(req.query)
        
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
        // ---> call to service to add user
        // console.log("add user -> ctrlr")
        console.log(req.query)

        await usersService.removeUser(req.query)
        .then(result =>   
                res.status(200).json({
                    message: "delete-user/successfull",
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

module.exports = {
            getUser,
            addUser,
            deleteUser,
            editUser
}