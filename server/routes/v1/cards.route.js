const express = require('express');
const cardsController = require('../../controllers/cards.controller');

const router = express.Router();

// router.get('/all-cards', cardsController.getAllCards);

// router.get('/filtered-cards', cardsController.getAllFilteredCards);

router.get('/', cardsController.getAllCards);// function with parmeters to all cards and filtered

router.post('/filter', cardsController.getAllFilteredCards);// function with parmeters to all cards and filtered

router.post('/', cardsController.addCardToUser);

router.put('/:id', cardsController.editCardOfUser);

router.delete('/:id', cardsController.removeCardFromUser);


module.exports = router;
