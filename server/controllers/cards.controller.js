const catchAsync = require('../utils/catchAsync');
const cardsService = require('../services/db/db.cards.service')
const usersService = require('../services/db/db.users.service')
const cloudService = require('../services/cloud.service');

// ------ fetch function. Sends the request automatically to custom catch errors function ------

const getAllCards = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    console.log("I'm on get all cards")
    cardsService.fetchAllFeedCards()// no arguments needed
    .then( cards => res.status(200).json(cards));
    

});

const getAllFilteredCards = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    console.log("im on filtered cards")
    const filter = req.body.data;
    let _cards = [];
    
    cardsService.fetchAllFilteredFeedCards(filter)// sends 1 arguments -> filter : Array
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

const getCard = catchAsync((req, res) => {
    // ---> call to service of get cards of req.body.user.email
    cardsService.fetchSingleCard(req.body)// sends 1 arguments -> card id
    .then( card => res.status(200).json(card));

});

const addCardToUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    const id = req.query.id;
    const _card = req.body.data
    //to create new card with images url from cloudinary after upload
    //call to cloudinary images upload service
    const card = {..._card, ["images"]: []};

    cardsService.insertCardToUser(id, card)// sends 2 arguments -> user id & card id
    .then(async cardId => {
        console.log("cardId: ", cardId);
        const images = await cloudService.uploadImages(id, _card.images, cardId)
        await cardsService.updateCardOfUser({
            card,
            id: cardId,
            ["images"]: images.reduce((prev,curr)=>{ return [...prev, curr.url] },[])
        })

        res.status(200).json({...cardId});

    }).catch( e => console.log(e.message))
    
});

const editCardOfUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    const cardId = req.params.id;
    const newCard = req.body.data;
    const oldCard = await cardsService.fetchSingleCard(newCard.id);
    let _images = newCard.images;
    console.log("im at editCard")
    const equals = (a,b) => a.length === b.length && a.every((v,i) => v === b[i]);
    if(!equals(newCard.images, oldCard.images))
        {
            await cloudService.deleteImagesOfUser(oldCard.userId, cardId);
            const tmp = await cloudService.uploadImages(newCard.userId, newCard.images,cardId);
            _images = tmp.reduce((prev,curr)=>{ return [...prev, curr.url] },[])
            
        }
    // const userAuthId = authService.fetchUserAuthId();
    cardsService.updateCardOfUser({...newCard, ['images']: _images})// sends 1 arguments -> card id
    .then(result => {
        res.status(200).json({result, message:'update-card/succesfull'});
    })
    .catch(e => console.log(e.message))
    
});

const removeCardFromUser = catchAsync(async (req, res) => {
    // ---> call to service of get cards of req.body.user.email
    const userId = req.body.userId;
    const cardId = req.params.id;
    console.log("remove card of user",userId, cardId)
    await cloudService.deleteImagesOfUser(userId, cardId)
    cardsService.deleteCardFromUser(userId, cardId)// sends 2 arguments -> user id & card id
    .then(result => {
        res.status(200).json({message:'delete-card/succesfull'});
    })
    .catch(e => console.log(e.message))
    
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
    .catch(e => console.log(e.message))

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

