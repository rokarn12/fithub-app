const express = require('express');
const router = express.Router();

// controllers
const { createOutfit, userOutfits } = require("../controllers/outfit");

// middlewares
const { outfitValidator } = require("../middlewares/outfit");

// api routes
router.post("/createoutfit", createOutfit, outfitValidator);
router.post("/outfits", userOutfits);


module.exports = router;