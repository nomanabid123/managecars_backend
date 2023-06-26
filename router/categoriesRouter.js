const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const {createCategory, updateCategory, deleteCategory, getCategories} = require('../controller/categoriesController');

// Route to create category
router.post('/create', isAuth, createCategory);

// Route to update category
router.put('/update', isAuth, updateCategory);

// Route to delete category
router.delete('/delete', isAuth, deleteCategory);

// Route to get all categories
router.get('/get', isAuth, getCategories);

module.exports = router;
