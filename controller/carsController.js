
const Car = require('../model/carsModel');
exports.getCarsByCategory = async (req, res) => {
    try{
        console.log("get car",req)
        const {category} = req.query;
        if(!category){
            return res.status(400).json({message: "Please enter category name", success: false})
        }
        const response = await Car.find({category});
        res.status(200).json({message: "Cars fetched Successfully", success: true, data: response})

    
    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
  
}

exports.createCar = async (req, res) => {
try {

    const {
        category,
        name,
        model,
        make,
        color
    } = req.body;
    if (!category) {
        return res.status(400).json({message: "Please enter category name", success: false})
    }

    const newCar = Car({
        category,
        name,
        model,
        make,
        color
    });

    const response = await newCar.save();
    res.status(200).json({message: "Car created Successfully", success: true})
} catch (err) {
    res.status(500).json({message: "Internal Server Error"})
}

}

exports.updateCar = async (req, res) => {
    try {
    const { _id, category,name,model,make,color } = req.body;
    
    if(!_id){
        return res.status(400).json({message: "Please enter car id", success: false})
    }

    const updatedCar = await Car.findByIdAndUpdate(_id, {
        category,
        name,
        model,
        make,
        color
    }, {new: true});

    res.status(200).json({message: "Car updated Successfully", success: true})



    } catch (err) {
        res.status(500).json({message: "Internal Server Error"})
    }


}

exports.deleteCar = async (req, res) => {

    try{
        const {_id} = req.query;
        if(!_id){
            return res.status(400).json({message: "Please enter car id", success: false})
        }

        const response = await Car.findByIdAndDelete(_id);
        res.status(200).json({message: "Car deleted Successfully", success: true})

    }catch(err){
        res.status(500).json({message: "Internal Server Error"})
    }
  
}
