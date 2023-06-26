const Category = require("../model/categoryModel");

// Create, update, delete, get categories

// Create category function
exports.createCategory = async (req, res) => {
    try {
        const {name} = req.body;
        // Destructuring name from req.body

        // Check if name is empty
        if (!name) {
            return res.status(400).json({message: "Please enter category name", success: false});
        }
        const newCategory = Category({name}); //
        await newCategory.save();
        res.status(200).json({message: "Category created Successfully", success: true});
    } catch (err) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

// Get all categories function
exports.updateCategory = async (req, res) => {
    const {_id, name} = req.body;
    // Destructuring _id and name from req.body
    // Check if _id and name is empty
    if (!_id || !name) {
        return res.status(400).json({message: "Please enter category data", success: false});
    }

    // Check if category exists in database and update
    try {
        let updateCategory = await Category.findByIdAndUpdate(_id, {
            name
        }, {new: true});
        return res.status(200).json({message: "Category updated Successfully", success: true});
    } catch (err) {
        return res.status(400).json({message: "Category not updated", success: false});
    }
};

// Delete category function
exports.deleteCategory = async (req, res) => {
    const {_id} = req.query;
    // Destructuring _id from req.query
    // Check if _id is empty
    if (!_id) {
        return res.status(400).json({message: "Please enter category id", success: false})
    }
    try {
        await Category.findByIdAndDelete(_id); // Find category by id and delete
        return res.status(200).json({message: "Category deleted Successfully", success: true});
    } catch (err) {

        return res.status(400).json({message: "Category not found", success: false});
    }
};

// Get all categories function
exports.getCategories = async (req, res) => {
    try { // Find all categories
        const response = await Category.find();
        return res.status(200).json({message: "Categories fetched Successfully", success: true, data: response});
    } catch (err) {
        return res.status(400).json({message: "Categories not found", success: false});
    }
};
