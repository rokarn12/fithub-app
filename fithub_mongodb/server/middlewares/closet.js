// const clothingItem = require("../models/clothingitem");

exports.itemValidator = (req, res, next) => {
    // clothing type is not null
    // req.check("clothingType", "Please select a clothing type").notEmpty();

    // color
    // req.check("color", "Please select a color").notEmpty();

    // attire type
    // req.check("attireType", "Please select an attire type").notEmpty();

    console.log("2****upload outfit******");

    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map((err) => err.msg)[0];

        return res.status(400).json({
            error: firstError,
        });
    }

    // proceed to next middleware
    next();
};