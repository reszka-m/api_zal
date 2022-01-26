const mongoose = require('mongoose');


const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Movies', MovieSchema);