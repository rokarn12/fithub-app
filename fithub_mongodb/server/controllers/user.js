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
    })
}