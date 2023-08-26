const jwt = require("jsonwebtoken");
const jwt_sec = process.env.JWT_SEC;
const Register = require("../Models/Register");

module.exports = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        const decoded = jwt.verify(token, jwt_sec);
        const user = await Register.findOne({
        _id: decoded._id,
        "tokens.token": token,
        });
        if (!user) {
        throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({
        success: false,
        message: "Please authenticate.",
        });
    }
    }