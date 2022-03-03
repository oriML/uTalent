const mongoose = require('mongoose');
const Card = require('../models/card.interface')
const User = require('../models/user.interface');

async function fetchAllFeedCards(){

// go to db and fetc all cards of user
    return Card.find({})

}

async function fetchAllFilteredFeedCards({filterSettings}){

    // filter settings = { date: "...", location: "..."}
    // mongoose queries
    return Card.find({...filterSettings})

}

async function fetchSingleCard(card){
    
    return Card.findOne(card.id)
}

async function insertCardToUser({id, card}){
     
    const _user = await User.findById(id);

    const _card = new Card({
        ...card
    })
    await _card.save();

    return _user.update(id,{
        ..._user,
        cards: (c) => [...c, _card.id]
    })


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
    insertCardToUser,
    updateCardOfUser,
    deleteCardFromUser
    
}