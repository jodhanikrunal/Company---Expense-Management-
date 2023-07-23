const {
    authSignUp,
    authSignUpVerify,
    authLogin,
} = require("../Controllers/AuthController");

const AuthRoutes = (app) => {
    app.post("/signup",authSignUp);
    app.post("/signup/verify",authSignUpVerify);
    app.post("/login",authLogin);
};

module.exports = AuthRoutes;