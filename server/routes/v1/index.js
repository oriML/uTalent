const express = require('express');
const usersRoute = require('./users.route');
const cardsRoute = require('./cards.route');

const router = express.Router();

const defaultRoutes = [
    {

        path: '/users',
        route: usersRoute,
    },
    {
        path: '/cards',
        route: cardsRoute,
    },

];

defaultRoutes.forEach(({path, route}) => {
    router.use(path, route);
});

module.exports = router;