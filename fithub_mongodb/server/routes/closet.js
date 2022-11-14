const express = require('express');
const router = express.Router();

// controllers
const { addItem, userItems, getUserHats, getUserShirts, getUserPants, getUserShoes } = require("../controllers/closet");

// middlewares
const { itemValidator } = require("../middlewares/closet");

// api routes
router.post("/additem", addItem, itemValidator);
router.post("/items", userItems);
router.post("/hats", getUserHats);
router.post("/shirts", getUserShirts);
router.post("/pants", getUserPants);
router.post("/shoes", getUserShoes);

module.exports = router;