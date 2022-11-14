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

