const express = require('express');
const cors = require('cors');

const httpStatus = require('http-status');
const routes = require('./routes/v1');

const logger = require('./controllers/logger')
const ApiError = require('./utils/ApiError');

const middlware = require('./middlware');

const app = express();


app.use(cors())

app.options('*', cors());

app.use(express.urlencoded({
    extended: false
}))

// app.use(middlware.decodeToken)

app.use(express.json()) // allows the app to accept json

app.use('/v1', routes)

app.get('/', (req, res) => {
    res.status(200).json({
        message: "I'm in!",
    })
    
})

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;