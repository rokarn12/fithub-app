const User = require("../models/user");
const ClothingItem = require("../models/clothingitem");
require("dotenv").config();


exports.addItem = async (req, res) => {
    const item = new ClothingItem(req.body);
    await item.save();

    res.status(202).json({
        message: "Item successfully added."
    });
};

exports.userItems = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const items = await ClothingItem.find({ // await ?
        user: "ron"
    });

    return res.status(200).json({
        message: "User's items returned.",
        items
    });
};