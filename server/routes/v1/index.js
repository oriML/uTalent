const express = require('express');
const usersRoute = require('./users.route');
const cardsRoute = require('./cards.route');
const uploadsRoute = require('./uploads.route');

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
    {
        path: '/uploads',
        route: uploadsRoute,
    },

];

defaultRoutes.forEach(({path, route}) => {
    router.use(path, route);
});

module.exports = router;