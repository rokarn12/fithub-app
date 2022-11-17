const User = require("../models/user");
const ClothingItem = require("../models/clothingitem"); // allows access to ClothingItems database
require("dotenv").config();

// controller for adding an item
exports.addItem = async (req, res) => {
    const item = new ClothingItem(req.body); // create a new ClothingItem with the input
    await item.save(); // save the item to database

    res.status(202).json({ 
        message: "Item successfully added." // feedback message
    });
};

// controller for removing item
exports.removeItem = async (req, res) => {
    await ClothingItem.deleteOne(req.body); // delete the clothing item based on its attributes
    // may need to find more efficient way to delete

    res.status(202).json({
        message: "Item successfully removed." // feedback message
    });
};

// gets all items associated with user's username
exports.userItems = async (req, res) => {

    const items = await ClothingItem.find({ // find clothing items for matching username
        user: req.body.user // find by username
    });

    return res.status(200).json({
        message: "User's items returned.", // feedback message
        items // returns "list" of user items
    });
};

exports.getUserHats = async (req, res) => {

    const hats = await ClothingItem.find({ // find user clothing items with attribute "Hat"
        user: req.body.user,
        clothingType: "Hat"
    });

    return res.status(200).json({
        message: "User's hats returned.",
        hats // returns "list" of hats
    });
};

exports.getUserShirts = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shirts = await ClothingItem.find({ // find user clothing items with attribute "Shirt"
        user: req.body.user,
        clothingType: "Shirt"
    });

    return res.status(200).json({
        message: "User's shirts returned.",
        shirts // returns "list" of shirts
    });
};

exports.getUserPants = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const pants = await ClothingItem.find({ // find user clothing items with attribute "Pants"
        user: req.body.user,
        clothingType: "Pants"
    });

    return res.status(200).json({
        message: "User's pants returned.",
        pants // returns "list" of pants
    });
};

exports.getUserShoes = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const shoes = await ClothingItem.find({ // find user clothing items with attribute "Shoes"
        user: req.body.user,
        clothingType: "Shoes"
    });

    return res.status(200).json({
        message: "User's shoes returned.",
        shoes // returns "list" of shoes
    });
};
