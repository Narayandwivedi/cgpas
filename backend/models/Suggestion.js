const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true });

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
