// const mongoose = require('mongoose');
const Card = require('../../models/card.interface')
const User = require('../../models/user.interface');

async function fetchAllFeedCards(){

// go to db and fetc all cards of user
    return Card.find({})

}

async function fetchAllFilteredFeedCards(filter){

    // { '_id': { $in: [...cardsIds] } }
    // mongoose queries
    return Card.find({ 'tags': { $in: filter} })

}

async function fetchSingleCard(card){
    
    return Card.findOne(card.id)
}

async function getCardsOfUser(cardsIds){

    return Card.find({ '_id': { $in: [...cardsIds] } })
}

async function insertCardToUser(id, card){

    const _card = new Card({
        ...card,
        userId: id
    })
    
    await _card.save();

    await User.updateOne(
        { _id: id},
        {$push: {cards: _card._id}},
    )
    
    return _card._id

}

async function updateCardOfUser(card){
     console.log(card.id);
    return Card.updateOne(
        {_id: card.id},
        card
        // {$set:{ images }}
        )

}

async function deleteCardFromUser(id, cardId){

    await Card.deleteOne({_id: cardId})

    return await User.updateOne(
       { _id: id},
       { $pull: { cards: cardId } }
       )


}


module.exports ={
    fetchAllFeedCards,
    fetchSingleCard,
    fetchAllFilteredFeedCards,
    getCardsOfUser,
    insertCardToUser,
    updateCardOfUser,
    deleteCardFromUser,
    
}


