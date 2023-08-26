const Joi = require("joi");


exports.AuthSignupValidator = Joi.object({
    company_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required().label('Password'),
    confirm_password: Joi.string().required().equal(Joi.ref('password')),
  });


  exports.AuthLoginValidator = Joi.object({
    email: Joi.string().email().required(),
  });