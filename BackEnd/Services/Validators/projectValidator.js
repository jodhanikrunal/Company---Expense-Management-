const Joi = require("joi");

exports.ProjectValidator = Joi.object({
    // project_name: Joi.string().required(),
    project_description: Joi.string().required(),
    max_budget: Joi.number().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
    project_manager: Joi.string().required(),
    progress: Joi.number().required(),
    status: Joi.string().required(),
    project_members: Joi.array().items(Joi.object({
        employee_name: Joi.string().required(),
        employee_department: Joi.string().required(),
        employee_designation: Joi.string().required(),
    })),
});