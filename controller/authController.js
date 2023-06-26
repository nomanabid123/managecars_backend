const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')
const User = require('../model/userModel')
const generator = require('generate-password');


//Signup function for user registration
exports.signup =async (req, res) => {
    let password = generator.generate({length: 10, numbers: true}); // Generate password

    const {name, email} = req.body // Destructuring name and email from req.body

    // Check if name and email is empty
    if(!name || !email){
        return res.status(400).json({message: "Please enter all fields", success: false})
    }

    // create new user
    const newUser = new User({name, email, password})
    if (! newUser) {
        return res.status(400).json({message: "User not created", success: false})
    }

    //save user
    const response = newUser.save();
    if(!response){
        return res.status(400).json({message: "User not created", success: false})
    }
    try {
        sendMail(req, password);
    } catch (err) {
        if (err) 
            console.log(err)

        

    }


    return res.status(201).json({message: "User created", success: true})
}

//Login function for user login
exports.login = async (req, res) => {
    
    const {email, password} = req.body // Destructuring email and password from req.body

    const user = await User.findOne({email, password}) // Find user by email and password
    if (! user) {
        return res.status(400).json({message: "User not found", success: false})
    } else {
        let token = ""
        try {
            // generate token
            token = jwt.sign({
                email,
                password
            }, process.env.JWT_SECRET_KEY, {expiresIn: "3h"})

        } catch (err) {
            if (err) 
                console.log(err)
        }
        //assign token to user and return response 
        res.status(201).json({message: "User logged in", success: true, token: token})

    }


}
