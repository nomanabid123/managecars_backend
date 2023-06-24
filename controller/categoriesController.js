const express = require("express");
const bodyParser = require("body-parser");


exports.createCategory = (req, res) => {

    const {name} = req.body
    console.log(name)

}

exports.updateCategory = (req, res) => {
    
        const {name} = req.body
        console.log(name)
    
    }

exports.deleteCategory = (req, res) => {
        
            const {name} = req.body
            console.log(name)
        
        }

exports.getCategories = (req, res) => {
                
            res.send("categories")
                }
