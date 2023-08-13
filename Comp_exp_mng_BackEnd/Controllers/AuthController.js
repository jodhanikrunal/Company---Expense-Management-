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
        const {company_name , email, password, confirm_password} = req.body;
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
    const {company_name, email, password, otp} = req.body;

    const is_verified = verifyOTP(email, otp);

    if (is_verified) {
      const exist = await Register.findOne({
        $or: [{ email: email }],
      });

      if (exist) {
        return res.status(400).send({
          success: false,
          message: "Company with Email already exists.",
        });
      }
      const newRegister = await new Register({company_name, email, password});
      await newRegister.save();

  }else res.status(400).send({ success: false, message: "Wrong OTP" });
  }catch(err){
      console.warn(err);
      res.status(400).send({
      success: false,
      message: "Error creating company.",
    });
  }
};

exports.authLogin = async (req, res) => {
  try{
    const {email, otp} = req.body;

    const { error } = AuthLoginValidator.validate({ email });
    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const is_verified = verifyOTP(email, otp);

    if (is_verified) {
      const exist = await Register.findOne({
        $or: [{ email: email }],
      });

      if (!exist) {
        return res.status(400).send({
          success: false,
          message: "Company with this Email does not exists.",
        });
      }
      const token = genToken(exist._id);
      res.status(200).send({ success: true, message: "Login successful", token: token });
}
  }catch(err){
      console.warn(err);
      res.status(400).send({
      success: false,
      message: "Error creating company.",
    });
  }
};