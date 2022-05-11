// const catchAsync = require('../utils/catchAsync');
// const usersService = require('../services/db/db.users.service');
// const cardsService = require('../services/db/db.cards.service');
// const cloudService = require('../services/cloud.service');

// const uploadProfileOfUser = catchAsync( async (req, res) => {

//         if(req.body === null)
//             {
//                 throw new Error('file is empty')
//             }
        
//         const id = req.query.id;
//         const fileStr = req.body.data;
//         let profile = "";
        
//         await cloudService.uploadProfileImageOfUser(id, fileStr)
//         .then( result => {
//             const url = result.url
//             if(typeof url === "string")
//                 profile = url
//             else throw new Error('Problem with upload to server')
//         })

//         await usersService.updateUser(id, { profileImg: profile})
//         .then( result => res.json({message: result}))

// })


// const uploadCardOfUser = catchAsync(async (req, res) => {

//     const id = req.query.id;
//     const dataCard = req.body.data
//     const _images = await cloudService.uploadImages(id, dataCard.images)
//     const images = _images.reduce((prev,curr)=>{ return [...prev, curr.url] },[])
//     const card = {...dataCard, ["images"]: images};

//     await cardsService.insertCardToUser(id, card)// sends 2 arguments -> user id & card id
//     .then(result => {
//         console.log(result)
//         res.status(200).json({result});
//     })
//     .catch( err => console.log(err))
    
// });


// const uploadCardImages = async () => {

// }

// const uploadCardVideo = async () => {

// }

// const removeProfileOfUser = async () => {

// }

// const removeCardImages = async () => {

// }

// const removeCardVideo = async () => {

// }


// module.exports = {
//     uploadProfileOfUser,
//     uploadCardOfUser,
//     uploadCardImages,
//     uploadCardVideo,
//     removeProfileOfUser,
//     removeCardImages,
//     removeCardVideo,
// }