const mongoose = require('mongoose');
// defines the structure of the document id like to store in db.

const userSchema = new mongoose.Schema({
    details:{

        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true
        },
        mobile: String,
        profileImg: String,
        age: {
            type: Number,
            min: 18,
            default: -1
        },
        describe: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: () => Date.now()
        },
        cards: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Card'
        },
        tokensHandler: {
            accessToken: { type: String, required: true },
            refreshToken: { type: String, required: true },
        }
    }

}, { timestamps: true });

const User = mongoose.model('users', userSchema);

module.exports = User;