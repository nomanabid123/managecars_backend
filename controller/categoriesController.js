const express = require("express");
const bodyParser = require("body-parser");
const Category = require("../model/categoryModel");

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Please enter category name", success: false });
    }
    const newCategory = Category({ name });
    const response = await newCategory.save();
    res
      .status(200)
      .json({ message: "Category created Successfully", success: true });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.updateCategory = async (req, res) => {
  const { _id, name } = req.body;
  try {
    let updateCategory = await Category.findByIdAndUpdate(
      _id,
      {
        name,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Category updated Successfully", success: true });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Category not updated", success: false });
  }
};

exports.deleteCategory = async (req, res) => {
  const { _id } = req.body;
  try {
    const response = await Category.findByIdAndDelete(_id);
    return res
      .status(200)
      .json({ message: "Category deleted Successfully", success: true });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Category not found", success: false });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const response = await Category.find();
    return res
      .status(200)
      .json({
        message: "Categories fetched Successfully",
        success: true,
        data: response,
      });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Categories not found", success: false });
  }
};
