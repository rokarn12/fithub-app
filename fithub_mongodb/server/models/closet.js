const mongoose = require('mongoose');
const ClothingItem = require('./clothingitem');

// this file is not currently used

const closetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        hat: {
            type: [ClothingItem],
        },
        shirt: {
            type: [ClothingItem],
        },
        shorts: {
            type: [ClothingItem],
        },
        shoes: {
            type: [ClothingItem],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Closet', closetSchema);