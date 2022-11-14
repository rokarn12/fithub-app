const mongoose = require('mongoose');
const ClothingItem = require('./clothingitem');


const outfitSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            //required: true,
            ref: 'User',
        },
        outfitName: {
            type: String,
            //required: true,
        },
        fitHat: {
            type: mongoose.Schema.Types.Mixed,
            //required: true,
        },
        fitTop: {
            type: mongoose.Schema.Types.Mixed,
            //required: true,
        },
        fitBottom: {
            type: mongoose.Schema.Types.Mixed,
            //required: true,
        },
        fitShoes: {
            type: mongoose.Schema.Types.Mixed,
            //required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = outfitObject = mongoose.model('outfitObject', outfitSchema);