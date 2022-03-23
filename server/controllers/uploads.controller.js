const catchAsync = require('../utils/catchAsync');
const usersService = require('../services/users.service');
const cardsService = require('../services/cards.service');
const cloudinaryService = require('../services/cloudinary.service');

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


const uploadCardOfUser = catchAsync(async (req, res) => {

    const id = req.query.id;
    const dataCard = req.body.data
    const images = await cloudinaryService.uploadImages(id, dataCard.images)

    const card = {...dataCard, ["images"]: images};

    await cardsService.insertCardToUser(id, card)// sends 2 arguments -> user id & card id
    .then(result => {
        res.status(200).json({...result});
    })
    .catch( err => console.log(err))
    
});


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
    uploadCardOfUser,
    uploadCardImages,
    uploadCardVideo,
    removeProfileOfUser,
    removeCardImages,
    removeCardVideo,
}