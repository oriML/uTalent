const mongoose = require('mongoose');
const User = require('../models/user')
// makes the actual fetch call to db to bring all cards
// returns the data

async function fetchUser({email}){

    return User.find({email})
}

async function insertUser(user){

    const _user = new User({

        details:{

            firstName: user.details.firstName,
            lastName: user.details.lastName,
            email: user.details.email,
            password: user.details.password,// need to be hashed at req
            mobile: user.details.mobile,
            describe: user.details.describe,
            profileImg: user.details.profileImg,
            age: user.details.age,
            joinDate: user.details.joinDate,
            cards: [],
            tokensHandler: {
                accessToken: user.details.tokensHandler?.accessToken,
                refreshToken: user.details.tokensHandler?.refreshToken,
            }
        }

    })

    return _user.save()
}


async function removeUser({id}){
    console.log(id)

    return User.findByIdAndDelete(id);
}

async function updateUser(id,user){
    console.log(id)

    return User.findByIdAndUpdate(id, user);
}

async function insertCardToUser(user, card){


    return

}


module.exports = {
    fetchUser,
    insertUser,
    updateUser,
    insertCardToUser,
    removeUser
}