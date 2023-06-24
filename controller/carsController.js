

exports.getCarsByCategory = (req, res) => {
    const { category } = req.body;
    console.log(category);
    res.send("cars");
}

exports.createCar = (req, res) => {
    const { name } = req.body;
    console.log(name);
}

exports.updateCar = (req, res) => {
    const { name } = req.body;
    console.log(name);
}

exports.deleteCar = (req, res) => {
    const { name } = req.body;
    console.log(name);
}
