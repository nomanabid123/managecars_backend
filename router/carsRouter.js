const express = require('express')
const router = express.Router()
const isAuth = require('../middleware/auth')

const {getCarsByCategory, createCar, updateCar, deleteCar} = require('../controller/carsController')

// Route to get all cars by category
router.get('/get', isAuth, getCarsByCategory)

// Route to create car
router.post('/create', isAuth, createCar)

// Route to update car
router.put('/update', isAuth, updateCar)

// Route to delete car
router.delete('/delete', isAuth, deleteCar)

module.exports = router;
