const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

// Importing Routers
const userRouter = require('./router/userRouter')
const categoriesRouter = require('./router/categoriesRouter')
const carsRouter = require('./router/carsRouter')
const app = express()

// Middlewares
app.use(express.json()) // To parse json data
app.use(cors()) // To allow cross origin request
dotenv.config()
// To get environment variables


// Database connection
mongoose.connect('mongodb://localhost:27017/managecars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log("error in database connection", err)
})

// Using Routers
app.use('/user', userRouter) // Route for user
app.use('/categories', categoriesRouter) // Route for categories
app.use('/cars', carsRouter) // Route for cars


// Server listening
const port = process.env.SERVER_PORT // Get port from .env file
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
