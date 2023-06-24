const express = require('express')
const mongoose = require('mongoose')
const User = require('./schema/userModel')

const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
const port = 3000


app.post('/signup', (req, res) => {
    const {name,email} = req.body

    let token = ""
    try{
    token = jwt.sign(
        {name,email},
        "brownfoxjumpsoverthelazydog",
        {expiresIn: "1h"}
    )

    }catch(err){
        if(err)
            console.log(err)
    }

    res.status(201).json({
        message: "User created",
        success: true,
        token: token
    })
})


app.post('/login', (req, res) => {
    const {email,password} = req.body

    let token = ""
    try{
    token = jwt.sign(
        {email,password},
        "brownfoxjumpsoverthelazydog",
        {expiresIn: "1h"}
    )

    }catch(err){
        if(err)
            console.log(err)
    }

    res.status(201).json({
        message: "User logged in",
        success: true,
        token: token
    })
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
)
