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
    console.log("im on filtered cards")
    const filter = req.body.data;
    let _cards = [];
    
    await cardsService.fetchAllFilteredFeedCards(filter)// sends 1 arguments -> filter : Array
    .then( async cards => {
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
                  })
           })
           }
    })
        
    res.status(200).json(_cards);

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
    const cardId = req.params.id;
    const newCard = req.body.data;
    const oldCard = await cardsService.fetchSingleCard(newCard.id);
    let _images = newCard.images;
    const equals = (a,b) => a.length === b.length && a.every((v,i) => v === b[i]);
    if(!equals(newCard.images, oldCard.images))
        {
            const tmp = await cloudinaryService.uploadImages(newCard.userId, newCard.images);
            _images = tmp.reduce((prev,curr)=>{ return [...prev, curr.url] },[])
            
        }
    // const userAuthId = authService.fetchUserAuthId();
    await cardsService.updateCardOfUser({...newCard, ['images']: _images})// sends 1 arguments -> card id
    .then(result => {
        res.status(200).json({result, message:'update-card/succesfull'});
    })
    
});

const removeCardFromUser = catchAsync((req, res) => {
    // ---> call to service of get cards of req.body.user.email
    const userId = req.body.userId;
    const cardId = req.params.id;
    console.log(userId, cardId)
    cardsService.deleteCardFromUser(userId, cardId)// sends 2 arguments -> user id & card id
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
            })
     })
     }
     
     res.status(200).send(_cards);
    
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

