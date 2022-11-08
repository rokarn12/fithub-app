const mongoose = require('mongoose');

const clothingTypes = new Array("hat", "shirt", "pants", "shoes");
const colors = new Array("red", "blue", "yellow", "green", "orange", "purple", "black", "gray", "white", "brown");
const eventType = new Array("relaxed", "casual", "businessCasual", "formal");

const clothingItemSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        itemID: {
            type: new mongoose.Types.ObjectId,
            required: true,
        },
        clothingType: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        attireType: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);