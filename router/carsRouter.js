const express = require('express')
const router = express.Router()
const isAuth = require('../middleware/auth')

const {getCarsByCategory,createCar,updateCar,deleteCar} = require('../controller/carsController')

router.get('/get',isAuth, getCarsByCategory)
router.post('/create',isAuth, createCar)
router.put('/update',isAuth, updateCar)
router.delete('/delete',isAuth, deleteCar)

module.exports = router;

