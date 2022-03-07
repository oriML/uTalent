const catchAsync = require('../utils/catchAsync');
const cloudinaryService = require('../services/cloudinary.service');
const usersService = require('../services/users.service');

const uploadProfileOfUser = catchAsync( async (req, res) => {

        if(req.body === null){
            
            return res.status(400).json({message: 'no file uploaded'})
        }
        
        const id = req.query.id;
        const fileStr = req.body.data;
        let profile = "";
        
        await cloudinaryService.uploadProfileImageOfUser(fileStr, id)
        .then( result => profile = result.url)
        .catch(err => res.status(500).json({error: `Error: ${err.message}`}))

        await usersService.updateUser(id, { profileImg: profile})
        .then( result => res.json({message: result}))
        .catch(err => res.status(500).json({error: `Error: ${err.message}`}))

    // await cloudinaryService.uploadProfileImageOfUser(req.body)
})

const uploadCardImages = async () => {

}

const uploadCardVideo = async () => {

}

const removeProfileOfUser = async () => {

}

const removeCardImages = async () => {

}

const removeCardVideo = async () => {

}


module.exports = {
    uploadProfileOfUser,
    uploadCardImages,
    uploadCardVideo,
    removeProfileOfUser,
    removeCardImages,
    removeCardVideo,
}