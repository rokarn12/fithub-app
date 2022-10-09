exports.userRegisterValidator = (req, res, next) => {
    // username is not null
    req.check("username", "Username is required").notEmpty();

    // email is not null, valid, and normalized
    req.check("email", "Email is required").notEmpty();
    req.check("email", "Invalid Email").isEmail();

    // check password
    req.check("password", "Password is required").notEmpty();
    req.check("password").isLength({ min: 6 }).withMessage("Password must contain at least 6 characters");

    // check for errors
    const errors = req.validationErrors();
    // if error, show the first one as it happens
    if (errors) {
        const firstError = errors.map((err) => err.msg)[0];

        return res.status(400).json({
            error: firstError,
        });
    }

    // proceed to next middleware
    next();
}