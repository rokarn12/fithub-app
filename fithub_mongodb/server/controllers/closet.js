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

exports.getUserHats = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const hats = await ClothingItem.find({ // await ?
        user: "ron",
        clothingType: "Hat"
    });

    return res.status(200).json({
        message: "User's hats returned.",
        hats
    });
};

exports.getUserShirts = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shirts = await ClothingItem.find({ // await ?
        user: "ron",
        clothingType: "Shirt"
    });

    return res.status(200).json({
        message: "User's shirts returned.",
        shirts
    });
};

exports.getUserPants = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const pants = await ClothingItem.find({ // await ?
        user: "ron",
        clothingType: "Pants"
    });

    return res.status(200).json({
        message: "User's pants returned.",
        pants
    });
};

exports.getUserShoes = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shoes = await ClothingItem.find({ // await ?
        user: "ron",
        clothingType: "Shoes"
    });

    return res.status(200).json({
        message: "User's shoes returned.",
        shoes
    });
};
