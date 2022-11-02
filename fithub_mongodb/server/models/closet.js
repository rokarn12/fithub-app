const mongoose = require('mongoose');
const ClothingObject = require('./clothingitem');


const closetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        hat: {
            type: [ClothingObject], // should change type to [ClothingObject]
        },
        shirt: {
            type: [ClothingObject],
        },
        shorts: {
            type: [ClothingObject],
        },
        shoes: {
            type: [ClothingObject],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Closet', closetSchema);