/**
 * Card schema.
 * Every card is added to the user's card list
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    images: {
        type: [Object],
        required: true
    },
    // video: {
    //     type: String
    // },

}, { timestamps: true });

// Card is a key in user details 
const Card = mongoose.model('cards', cardSchema);

module.exports = Card;