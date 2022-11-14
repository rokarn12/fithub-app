const outfitObject = require("../models/outfit");
// const ClothingItem = require("../models/clothingitem");
require("dotenv").config();

exports.createOutfit = async (req, res) => {
    const outfit = new outfitObject(req.body);
    // console.log(outfit);
    await outfit.save();

    res.status(202).json({
        message: "Outfit successfully created."
    });
};

exports.userOutfits = async (req, res) => {
    // const {username} = req.user; 
    console.log("****");
    const items = await outfitObject.find({ // await ?
        user: "ron"
    });

    return res.status(200).json({
        message: "User's outfits returned.",
        items
    });
};

