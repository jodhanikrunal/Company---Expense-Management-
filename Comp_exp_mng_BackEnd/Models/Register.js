const mongoose = require("mongoose");

const RegisterationSchema = mongoose.Schema({
      company_name: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password:{
        type: String,
        required: true
      }
});

const Register = mongoose.model("Register", RegisterationSchema);
module.exports = Register;