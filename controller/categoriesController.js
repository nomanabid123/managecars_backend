const express = require("express");
const bodyParser = require("body-parser");
const Category = require('../model/categoryModel')


exports.createCategory = async (req, res) => {

    const {name} = req.body
    if(!name){
         return res.status(400).json({message: "Please enter category name", success: false})
    }

    const newCategory = Category({name})
    if (!newCategory) {
        return res.status(400).json({message: "Category not created", success: false})
    }

    const response = await newCategory.save();
        console.log(response)

    return res.status(200).json({message:"Category created Successfully",success:true})
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
