const catchAsync = require('../utils/catchAsync');
const cardsService = require('../services/cards.service')
const usersService = require('../services/users.service')
const cloudinaryService = require('../services/cloudinary.service')

// ------ fetch function. Sends the request automatically to custom catch errors function ------

const getAllCards = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    console.log("I'm on get all cards")
    await cardsService.fetchAllFeedCards()// no arguments needed
    .then( cards => res.status(200).json(cards));

});

const getAllFilteredCards = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    await cardsService.fetchAllFilteredFeedCards(req.body)// sends 1 arguments -> filter settings: Object
    .then( cards => res.status(200).json(cards));

});

const getCard = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    await cardsService.fetchSingleCard(req.body)// sends 1 arguments -> card id
    .then( card => res.status(200).json(card));

});

const addCardToUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    const id = req.query.id;
    //to create new card with images url from cloudinary after upload
    //call to cloudinary images upload service
    const images = await cloudinaryService.uploadImages(id, req.body.data.card.images)
    const card = {...card, ["images"]: images};
    await cardsService.insertCardToUser(id, card)// sends 2 arguments -> user id & card id
    .then(result => {
        res.status(200).json({...result});
    })
    .catch( err => console.log(err))
    
});

const editCardOfUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    await cardsService.updateCardOfUser(req.body)// sends 1 arguments -> card id
    .then(result => {
        res.status(200).json({result, message:'update-card/succesfull'});
    })
    
});

const removeCardFromUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    await cardsService.deleteCardFromUser(req.body)// sends 2 arguments -> user id & card id
    .then(result => {
        res.status(200).json({message:'delete-card/succesfull'});
    })
    
});

/** UNLOGGED USER (public info) */

const getAllUnloggedUserCards = catchAsync(async (req,res) => {
    
    console.log("getAllUnloggedUserCards")
    let _cards = [];
    const cards = await cardsService.fetchAllFeedCards();
    
     for(const card of cards){
      await usersService.fetchUserById(card.userId)
     .then(user => {
         console.log(user.firstName + "" + user.lastName);
          _cards.push({
              title: card.title,
              description: card.description,
              tags: card.tags,
              images: card.images,
              profileImg: user.profileImg,
              username: user.firstName + " " + user.lastName
              }
            )
     })
     }
     
     res.status(200).send(_cards);
    // await cardsService.fetchAllFeedCards()
    // .then(cards => {
    //     console.log(cards)
    //     const unloggedUserFeedCards = cards.reduce( (prev, card)=>{

    //         const unloggedUserFeedCard = {
    //             title: card.title,
    //             description: card.description,
    //             tags: card.tags,
    //             images: card.images,
    //             // profileImg: card.user.profileImg,
    //             // username: card.user.name
    //         };

    //         return [
    //             ...prev,
    //             unloggedUserFeedCard
    //         ]
    //     } , [])

    //     res.status(200).json(unloggedUserFeedCards);

    // })
    
})

module.exports = {
    getAllCards,
    getAllFilteredCards,
    getCard,
    addCardToUser,
    editCardOfUser,
    removeCardFromUser,

    getAllUnloggedUserCards,
}

