const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const httpStatus = require('http-status');
const routes = require('./routes/v1');
const publicRoutes = require('./routes');

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

app.use('/',publicRoutes)// for public info

// app.use('/v1', middlware.decodeToken) // for personal info -> set it on app.use('v1/', routes)
app.use('/v1', routes)

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;