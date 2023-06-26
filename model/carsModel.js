const mongoose = require('mongoose')

// Schema for cars
const carsModel = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    color: {
        type: String
    },
    model: {
        type: Number,
        required: true
    },
    make: {
        type: String
    }
})

// Exporting cars model
module.exports = mongoose.model('Cars', carsModel);
