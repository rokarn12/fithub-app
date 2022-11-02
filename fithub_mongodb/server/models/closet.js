const mongoose = require('mongoose');

const closetSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        hat: {
            type: Array, // should change type to [ClothingObject]
        },
        shirt: {
            type: Array,
        },
        shorts: {
            type: Array,
        },
        shoes: {
            type: Array,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Closet', closetSchema)