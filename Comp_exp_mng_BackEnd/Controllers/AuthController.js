require("dotenv").config({ path: "../.env" });
const Register = require("../Models/Register");
const { sendOTP, verifyOTP } = require("../Services/otpService");
const genToken = require("../Services/jwtTokenService");
const {
  AuthSignupValidator,
  AuthLoginValidator,
} = require("../Services/Validators/authValidator");


exports.authSignUp = async (req, res) => {
    try{
        const {cin, company_name , email, password, confirm_password} = req.body;
        const {error} = AuthSignupValidator.validate(req.body);

        if (error) {
            return res
              .status(400)
              .json({ success: false, message: error.details[0].message });
          }

          try {
            await sendOTP(email);
            res.status(200).send({ success: true, message: "OTP sent" });
          } catch (error) {
            console.log(error);
            res
              .status(500)
              .json({ success: false, message: "Error sending OTP !!!" });
          }
          
    }catch(err){
        console.log(error);
        res.status(500).send({
        success: false,
        message: "Error creating Account.",
    });
    }
};

exports.authSignUpVerify = async (req, res) => {
  try{
    const {email, otp} = req.body;

  }catch(err){
      console.warn(error);
      res.status(400).send({
      success: false,
      message: "Error creating company.",
    });
  }
};

exports.authLogin = async (req, res) => {

};