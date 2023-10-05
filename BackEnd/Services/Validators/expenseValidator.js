const Joi = require("joi");

exports.expenseValidator = Joi.object({
    expenseName: Joi.string().required(),
    expenseAmount: Joi.number().required(),
    expenseDate: Joi.date().required(),
    expenseCategory: Joi.string().required(),
    expenseCurreency: Joi.string().required(),
    // expenseDocument: Joi.string().required(),
    paymentMethod: Joi.string().required(),
    recieverName: Joi.string().required(),
    taxPercentage: Joi.number().required(),
    notes: Joi.string().required(),
    taxAmount: Joi.number().required(),
});