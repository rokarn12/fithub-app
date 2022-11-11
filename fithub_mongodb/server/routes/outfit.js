const express = require('express');
const router = express.Router();

// controllers
const { createOutfit } = require("../controllers/outfit");

// middlewares
const { outfitValidator } = require("../middlewares/outfit");

// api routes
router.post("/createoutfit", createOutfit, outfitValidator);


module.exports = router;