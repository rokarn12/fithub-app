const mongoose = require('mongoose');
// const ClothingItem = require('./clothingitem');


const outfitSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            ref: 'User',
        },
        outfitName: {
            type: String,
            required: true,
        },
        fitHat: {
            type: String,
            required: true,
        },
        fitTop: {
            type: String,
            required: true,
        },
        fitBottom: {
            type: String,
            required: true,
        },
        fitShoes: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = outfitObject = mongoose.model('outfitObject', outfitSchema);