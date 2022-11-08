const mongoose = require('mongoose');
const ClothingItem = require('./clothingitem');


const closetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        hat: {
            type: [ClothingItem], // should change type to [ClothingObject]
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