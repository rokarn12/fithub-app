const express = require('express');
const router = express.Router();

// controllers
const { addItem, userItems } = require("../controllers/closet");

// middlewares
const { itemValidator } = require("../middlewares/closet");

// api routes
router.post("/additem", addItem, itemValidator);
router.get("/items", userItems);

module.exports = router;