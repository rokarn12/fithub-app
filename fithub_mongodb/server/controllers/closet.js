const User = require("../models/user");
const ClothingItem = require("../models/clothingitem");
require("dotenv").config();

//add item to closet
exports.addItem = async (req, res) => {
    const item = new ClothingItem(req.body);
    console.log(item);
    await item.save();

    res.status(202).json({
        message: "Item successfully added."
    });
};

//remove item from closet
exports.removeItem = async (req, res) => {
    await ClothingItem.deleteOne(req.body);

    res.status(202).json({
        message: "Item successfully removed."
    });
};

// gets all items associated with user's username
exports.userItems = async (req, res) => {

    const items = await ClothingItem.find({
        user: req.body.user
    });

    return res.status(200).json({
        message: "User's items returned.",
        items
    });
};

// gets all hats in the user's closet
exports.getUserHats = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const hats = await ClothingItem.find({ // await ?
        user: req.body.user,
        clothingType: "Hat"
    });

    return res.status(200).json({
        message: "User's hats returned.",
        hats
    });
};


// gets all shirts in the user's closet
exports.getUserShirts = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shirts = await ClothingItem.find({ // await ?
        user: req.body.user,
        clothingType: "Shirt"
    });

    return res.status(200).json({
        message: "User's shirts returned.",
        shirts
    });
};


// gets all pants in the user's closet
exports.getUserPants = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const pants = await ClothingItem.find({ // await ?
        user: req.body.user,
        clothingType: "Pants"
    });

    return res.status(200).json({
        message: "User's pants returned.",
        pants
    });
};

// gets all shoes in the user's closet
exports.getUserShoes = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shoes = await ClothingItem.find({ // await ?
        user: req.body.user,
        clothingType: "Shoes"
    });

    return res.status(200).json({
        message: "User's shoes returned.",
        shoes
    });
};
