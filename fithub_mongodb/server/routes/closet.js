const express = require('express');
const router = express.Router();

// controllers
const { addItem } = require("../controllers/closet");

// middlewares
const { itemValidator } = require("../middlewares/closet");

// api routes
router.post("/additem", addItem, itemValidator);

module.exports = router;