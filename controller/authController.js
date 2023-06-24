const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const sendMail = require('./sendMail')


exports.signup = (req, res) => {

const {name, email} = req.body

let token = ""
try {
    let password = sendMail(req);
    token = jwt.sign({
        name,
        email
    }, "brownfoxjumpsoverthelazydog", {expiresIn: "1h"})

} catch (err) {
    if (err) 
        console.log(err)
    
}


res.status(201).json({message: "User created", success: true, token: token})
}

exports.login = (req, res) => {

const {email, password} = req.body

let token = ""
try {
    token = jwt.sign({
        email,
        password
    }, "brownfoxjumpsoverthelazydog", {expiresIn: "1h"})

} catch (err) {
    if (err) 
        console.log(err)
    
}

res.status(201).json({message: "User logged in", success: true, token: token})



}