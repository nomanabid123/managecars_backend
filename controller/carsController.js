const Car = require('../model/carsModel');

// get cars by category name
exports.getCarsByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    // Destructuring category from req.query
    // Check if category is empty
    if (!category) {
      return res.status(400).json({ message: 'Please enter category name', success: false });
    }
    // Check if category exists in database
    const response = await Car.find({ category });
    res.status(200).json({ message: 'Cars fetched Successfully', success: true, data: response });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// create new car
exports.createCar = async (req, res) => {
  try {
    const { category, name, model, make, color } = req.body; // Destructuring category, name, model, make, color from req.body
    if (!category || !name || !model || !make || !color) {
      return res.status(400).json({ message: 'Please enter category name', success: false });
    }

    // Creating new car
    const newCar = Car({
      category,
      name,
      model,
      make,
      color,
    });

    await newCar.save(); //
    res.status(200).json({ message: 'Car created Successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update existing car by id
exports.updateCar = async (req, res) => {
  try {
    const { _id, category, name, model, make, color } = req.body;

    // Check if _id, category, name, model, make, color is empty
    if (!_id || !category || !name || !model || !make || !color) {
      // If empty return error
      return res.status(400).json({ message: 'Please enter information correctly', success: false });
    }

    const response = await Car.findByIdAndUpdate(
      _id,
      {
        category,
        name,
        model,
        make,
        color,
      },
      { new: true }
    );

    if (!response) return res.status(400).json({ message: 'Car not found', success: false });

    res.status(200).json({ message: 'Car updated Successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete existing car by id
exports.deleteCar = async (req, res) => {
  try {
    const { _id } = req.query;
    // Destructuring _id from req.query
    // Check if _id is empty
    if (!_id) {
      return res.status(400).json({ message: 'Please enter car id', success: false });
    }

    const response = await Car.findByIdAndDelete(_id); // Find car by id and delete
    if (!response) return res.status(400).json({ message: 'Car not found', success: false });

    res.status(200).json({ message: 'Car deleted Successfully', success: true });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
