const express = require('express');
const cardsController = require('../../controllers/cards.controller');

const router = express.Router();

router.get('/get-cards', cardsController.getAllCards);

router.get('/get-filtered-cards', cardsController.getAllFilteredCards);

router.get('/get-card', cardsController.getCard);

router.post('/add-card', cardsController.addCardToUser);

router.put('/edit-card', cardsController.editCardOfUser);

router.delete('/remove-card', cardsController.removeCardFromUser);


module.exports = router;
