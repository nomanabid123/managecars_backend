const express = require('express')
const router = express.Router()

const {getCarsByCategory,createCar,updateCar,deleteCar} = require('../controller/carsController')

router.get('/get', getCarsByCategory)
router.post('/create', createCar)
router.put('/update', updateCar)
router.delete('/delete', deleteCar)

module.exports = router;

