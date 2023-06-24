const mongoose = require('mongoose')

const carsModel = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name:{
        type: String,
    },
    color:{
        type: String,
    },
    model:{
        type: String,
        required: true
    },
    make:{
        type: String,
    }
})

module.exports = mongoose.model('Cars', carsModel);
