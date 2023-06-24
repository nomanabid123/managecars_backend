const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')
const User = require('../model/userModel')
const generator = require('generate-password');


exports.signup =async (req, res) => {
    let password = generator.generate({length: 10, numbers: true});

    const {name, email} = req.body
    if(!name || !email){
        return res.status(400).json({message: "Please enter all fields", success: false})
    }

    const newUser = new User({name, email, password})
    if (! newUser) {
        return res.status(400).json({message: "User not created", success: false})
    }

    const response = newUser.save();
    if(!response){
        return res.status(400).json({message: "User not created", success: false})
    }


    let token = ""
    try {
        sendMail(req, password);
        token = jwt.sign({
            name,
            email
        }, "brownfoxjumpsoverthelazydog", {expiresIn: "3h"})

    } catch (err) {
        if (err) 
            console.log(err)

        

    }


    return res.status(201).json({message: "User created", success: true, token: token})
}

exports.login = async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email, password})
    if (! user) {
        return res.status(400).json({message: "User not found", success: false})
    } else {
        let token = ""
        try {
            token = jwt.sign({
                email,
                password
            }, "brownfoxjumpsoverthelazydog", {expiresIn: "3h"})

        } catch (err) {
            if (err) 
                console.log(err)
        }

        res.status(201).json({message: "User logged in", success: true, token: token})

    }


}
