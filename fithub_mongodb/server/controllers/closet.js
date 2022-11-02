const ClothingObject = require("../models/clothingitem");
require("dotenv").config();

exports.addItem = async (req, res) => {
    const item = new ClothingObject(req.body);
    await item.save();

    res.status(202).json({
        message: "Item successfully added."
    });
};