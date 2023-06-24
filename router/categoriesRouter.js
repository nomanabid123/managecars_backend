const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/auth');
const { createCategory, updateCategory, deleteCategory, getCategories } = require('../controller/categoriesController');
router.post('/create',isAuth, createCategory);
router.put('/update',isAuth, updateCategory);
router.delete('/delete',isAuth, deleteCategory);
router.get('/get',isAuth, getCategories);

module.exports = router;