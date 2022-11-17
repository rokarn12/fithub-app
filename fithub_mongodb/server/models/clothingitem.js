const mongoose = require('mongoose');

// const clothingTypes = new Array("hat", "shirt", "pants", "shoes");
// const colors = new Array("red", "blue", "yellow", "green", "orange", "purple", "black", "gray", "white", "brown");
// const eventType = new Array("relaxed", "casual", "businessCasual", "formal");

// new mongoose schema for ClothingItems
const clothingItemSchema = new mongoose.Schema(
    {
        user: { // every clothing item should be saved to a certain user
            type: String,
            required: true,
            ref: 'User',
        },
        itemName: { // user's have the ability to name their clothing item
            type: String,
            required: true,
        },
        clothingType: { // hat, shirt, pants, shoes, etc.
            type: String,
            required: true,
        },
        color: { // user's must specify a color for their item
            type: String,
            required: true,
        },
        attireType: { // casual, business casual, formal, etc.
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // record when this entry was entered
    }
);

// export the model to create a database
module.exports = ClothingItem = mongoose.model('ClothingItem', clothingItemSchema);