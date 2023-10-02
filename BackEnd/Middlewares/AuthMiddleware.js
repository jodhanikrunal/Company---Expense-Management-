const jwt = require("jsonwebtoken");
const jwt_sec = process.env.JWT_SEC;
const Register = require("../Models/Register");

module.exports = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        // console.log(token);
        
        if (!token) {
            return res.status(401).json({
              success: false,
              message: "No token provided. Please authenticate.",
            });
          }

        const decoded = jwt.verify(token, jwt_sec);
        // console.log(decoded);
        const user = await Register.findOne({
        _id: decoded._id,
        // "tokens.token": token,
        });
        console.log(user);
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