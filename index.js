const express = require('express')
const mongoose = require('mongoose')
const User = require('./schema/userModel')
const sendMail = require('./controller/sendMail')

const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const userRouter = require('./router/userRouter')
const app = express()
app.use(express.json())

app.use('/user', userRouter)
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
