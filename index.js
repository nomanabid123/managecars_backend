const express = require('express')
const mongoose = require('mongoose')
const User = require('./model/userModel')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const userRouter = require('./router/userRouter')
const categoriesRouter = require('./router/categoriesRouter')
const carsRouter = require('./router/carsRouter')
const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/managecars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log("error in database connection", err)
})

app.use('/user', userRouter)
app.use('/categories', categoriesRouter)
app.use('/cars', carsRouter)
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
