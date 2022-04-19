const mongoose = require('mongoose');
const Card = require('../models/card.interface')
const User = require('../models/user.interface');

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

    return User.updateOne(
        { _id: id},
        {$push: {cards: _card._id}},
    )


}

async function updateCardOfUser({id, card}){
     
    return Card.updateOne(card.id, card)

}

async function deleteCardFromUser({id, card}){
     
    const _user = await User.findById(id);
    await Card.delete(card.id)

    return await _user.update(
        id,
        {
        ..._user,
        cards: (c) => c.filter(card => card.id !== card.id)
    })


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