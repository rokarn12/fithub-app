const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
  const accessToken = req.cookies.jwt

  // if there is no token in cookies, request is unauthorized
  if (!accessToken) {
    return res.status(403).json({
      error: 'Unauthorized'
    })
  }

  let payload
  try {
    // verify token jwt.verify
    // throws error if token has expired or invalid signature
    payload = jwt.verify(accessToken, process.env.JWT_SECRET)
    req._id = payload._id

    next()
  } catch (e) {
    // return req unauthorized error
    return res.status(403).json({
      error: 'Unauthorized'
    })
  }
}
