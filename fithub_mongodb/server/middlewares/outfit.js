// const outfitObject = require('../models/outfit')

exports.outfitValidator = (req, res, next) => {
  // outfit name is not null
  req.check('outfitName', 'Please select a name').notEmpty()

  // top
  req.check('fitTop', 'Please select a top').notEmpty()

  // bottom
  req.check('fitBottom', 'Please select an attire type').notEmpty()

  const errors = req.validationErrors()
  if (errors) {
    const firstError = errors.map((err) => err.msg)[0]

    return res.status(400).json({
      error: firstError
    })
  }

  // proceed to next middleware
  next()
}
