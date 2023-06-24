const express = require('express');
const router = express.Router();
const { createCategory, updateCategory, deleteCategory, getCategories } = require('../controller/categoriesController');
router.post('/create', createCategory);
router.put('/update', updateCategory);
router.delete('/delete', deleteCategory);
router.get('/get', getCategories);

module.exports = router;