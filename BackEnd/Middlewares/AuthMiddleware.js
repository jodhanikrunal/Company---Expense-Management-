const jwt = require("jsonwebtoken");
const jwt_sec = process.env.JWT_SEC;
const Register = require("../Models/Register");

module.exports = async (req, res, next) => {
    try {
        const jwttoken = req.header('Authorization');
        // console.log("Token from Header: ", jwttoken);

        if (!jwttoken) {
            return res.status(401).json({
                success: false,
                message: "No token provided. Please authenticate.",
            });
        }
        const decoded = jwt.verify(jwttoken, jwt_sec);
        // console.log("Decoded Token : ", decoded);
        const user = await Register.findOne({
            _id: decoded._id,
            //"tokens.token": token,
        });
        // console.log("User Created : ", user);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        // req.token = jwttoken;
        next();
    } catch (error) {
        console.log("Error in Catch Block : ", error);
        res.status(401).send({
            success: false,
            message: "Please authenticate.",
        });
    }
}


