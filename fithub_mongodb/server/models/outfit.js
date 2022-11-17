const mongoose = require('mongoose');
// const ClothingItem = require('./clothingitem');

// new mongoose schema for outfits
const outfitSchema = new mongoose.Schema(
    {
        user: { // associate with a username
            type: String,
            required: true,
            ref: 'User',
        },
        outfitName: { // user must name the outfit
            type: String, // string saved is ID of the ClothingItem object
            required: true,
        },
        fitHat: { // hat part of outfit
            type: String, 
            required: true,
        },
        fitTop: { // top part of outfit
            type: String,
            required: true,
        },
        fitBottom: { // bottom part of outfit
            type: String,
            required: true,
        },
        fitShoes: { // shoes part of outfit
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// export schema to database
module.exports = outfitObject = mongoose.model('outfitObject', outfitSchema);