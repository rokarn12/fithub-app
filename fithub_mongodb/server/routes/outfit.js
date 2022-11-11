const express = require('express');
const router = express.Router();

// controllers
const { createOutfit } = require("../controllers/outfit");

// middlewares


// api routes
router.post("/createoutfit", createOutfit);


module.exports = router;