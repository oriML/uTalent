const express = require('express');
const cardsRoute = require('./publicCards.route');

const router = express.Router();

const defaultRoutes = [

    {
        path: '/cards/unlogged',
        route: cardsRoute,
    },

];

defaultRoutes.forEach(({path, route}) => {
    router.use(path, route);
});

module.exports = router;