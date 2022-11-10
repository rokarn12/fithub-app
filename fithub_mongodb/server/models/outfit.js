const mongoose = require('mongoose');
const ClothingItem = require('./clothingitem');


const outfitSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            ref: 'User',
        },
        outfitName: {
            type: ClothingItem,
            required: true,
        },
        fitHat: {
            type: ClothingItem,
            //required: true,
        },
        fitTop: {
            type: ClothingItem,
            required: true,
        },
        fitBottom: {
            type: ClothingItem,
            required: true,
        },
        fitShoes: {
            type: ClothingItem,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = outfitObject = mongoose.model('Outfit', outfitSchema);