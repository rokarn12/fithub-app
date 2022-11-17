const outfitObject = require("../models/outfit"); // allows access to outfits database
require("dotenv").config();

// controller for creating an outfit
exports.createOutfit = async (req, res) => {
    const outfit = new outfitObject(req.body); // create new outfit object based on input

    await outfit.save(); // save outfit to database

    res.status(202).json({
        message: "Outfit successfully created." // feedback message
    });
};

// controller to return user's outfits
exports.userOutfits = async (req, res) => {

    const items = await outfitObject.find({ // find outfits associated with current username
        user: req.body.user // find by user
    });

    return res.status(200).json({
        message: "User's outfits returned.",
        items // return "list" of items
    });
};

