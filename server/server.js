const http = require('http');
const app = require('./app');
const port = 4000;

const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(
    process.env.db,
     { 
        useNewUrlParser: true,
        useUnifiedTopology: true
     })
    .then( () => 
        app.listen(
            port, 
            () => console.log(`running on server: ${port} \nconnected to db`)
    )
    )
    .catch( err => console.log(err))
// const server = http.createServer(app)

