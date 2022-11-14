const express = require('express');
const router = express.Router();

// controllers
const { addItem, userItems, getUserHats, getUserShirts, getUserPants, getUserShoes, removeItem } = require("../controllers/closet");

// middlewares
const { itemValidator } = require("../middlewares/closet");

// api routes
router.post("/additem", addItem, itemValidator);
router.post("/removeitem", removeItem)
router.get("/items", userItems);
router.get("/hats", getUserHats);
router.get("/shirts", getUserShirts);
router.get("/pants", getUserPants);
router.get("/shoes", getUserShoes);

module.exports = router;