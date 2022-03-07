const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const httpStatus = require('http-status');
const routes = require('./routes/v1');

const logger = require('./utils/logger')
const ApiError = require('./utils/ApiError');

const middlware = require('./middlware');

const app = express();

app.use(fileUpload({
    createParentPath: true
}))

app.use(cors())

app.options('*', cors());

app.use(express.json({limit: '50mb'})) // allows the app to accept json

app.use(express.urlencoded({
extended: false,
limit:'50mb'
}))

// app.use(middlware.decodeToken)

app.use('/v1', routes)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;