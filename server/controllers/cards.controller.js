const catchAsync = require('../utils/catchAsync');
const cardsService = require('../services/cards.service')

// ------ fetch function. Sends the request automatically to custom catch errors function ------

const getAllCards = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
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
    await cardsService.insertCardToUser(req.body)// sends 2 arguments -> user id & card id
    .then(result => {
        res.status(200).json({...result});
    })
    
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

