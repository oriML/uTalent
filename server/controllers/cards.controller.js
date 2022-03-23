const catchAsync = require('../utils/catchAsync');
const cardsService = require('../services/cards.service')
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

module.exports = {
    getAllCards,
    getAllFilteredCards,
    getCard,
    addCardToUser,
    editCardOfUser,
    removeCardFromUser,
}

