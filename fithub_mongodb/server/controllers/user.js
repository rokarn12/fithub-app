const User = require("../models/user")
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
    // check if user already exists
    const usernameExists = await User.findOne({
        username: req.body.username,
    });
    const emailExists = await User.findOne({
        email: req.body.email,
    });

    if (usernameExists) {
        return res.status(403).json({
            error: "Username is taken",
        });
    }
    if (emailExists) {
        return res.status(403).json({
            error: "Email has already been used",
        });
    }

    // if new user, create a new user
    const user = new User(req.body);
    await user.save()

    res.status(201).json({
        message: "Signup Successful! Please log in to proceed."
    });
};

exports.login = async (req, res) => {
    // find user based on email
    const {email, password} = req.body;

    await User.findOne({email}).exec((err, user) => {
        // if error or no user
        if (err || !user) {
            return res.status(401).json({
                error: "Invalid Credentials",
            });
        }

        // if user is found, use authenticate model from the model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Invalid email or password",
            });
        }

        // generate a token with user id and jwt secret
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        // persist token as 'jwt' in cookie with an expiry date
        res.cookie("jwt", token, { expire: new Date() + 9999, httpOnly: true });

        // return response with user
        const { username } = user;
        return res.json({
            message: "Login successful!",
            username,
        })
    });
};

exports.logout = (req, res) => {
    // clear the cookie
    res.clearCookie("jwt");

    return res.json({
        message: "Logout successful",
    });
};

exports.getLoggedInUser = (req, res) => {
    const { username } = req.user;

    return res.status(200).json({
        message: "User is still logged in.",
        username,
    });
};