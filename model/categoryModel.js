const mongoose = require('mongoose')

// Schema for categories
const categoryModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// Exporting categories model
module.exports = mongoose.model('Category', categoryModel);
