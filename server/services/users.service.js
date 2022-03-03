const mongoose = require('mongoose');
const User = require('../models/user.interface')
const admin = require('../config/firebase-config')
// makes the actual fetch call to db to bring all cards
// returns the data

async function fetchUser({email}){
    console.log(email)
    return User.find({email})
}

async function insertUser({user}){
    console.log(user)
    const _user = new User({

            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            // password: user.password,// need to be hashed at req
            mobile: user.mobile,
            describe: user.describe,
            profileImg: user.profileImg,
            age: user.age,
            joinDate: user.joinDate,
            cards: [],
            tokensHandler: {
                accessToken: user.tokensHandler?.accessToken,
                refreshToken: user.tokensHandler?.refreshToken,
        }

    })

    return _user.save()
}


async function removeUser({id,uid}){
    console.log(id, uid)
    await admin.auth().deleteUser(uid)

    return User.findByIdAndDelete(id);
}

async function updateUser(user){
    console.log(user, user._id)

    return User.findByIdAndUpdate(user._id, user);
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