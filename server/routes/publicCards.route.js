const express = require('express');
const cardsController = require('../controllers/cards.controller');

const router = express.Router();

router.get('/', cardsController.getAllUnloggedUserCards);// function with parmeters to all cards and filtered


module.exports = router;
