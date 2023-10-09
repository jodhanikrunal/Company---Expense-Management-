const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: true,
      },
    projectTitle: {
        type: String,
        required: true,
    },
    projectDescription: {
        type: String,
        required: true,
    },
    maxBudget: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    projectManager: {
        type: String,
        required: true,
    },
    progress: {
        type: String,
        required: true,
    },
    // status: {
    //     type: String,
    //     required: true,
    // },
    projectMembers: [
        {
            employeeName: {
                type: String,
            },
            employeeDepartment: {
                type: String,
            },
            employeeDesignation: {
                type: String,
            },
        }
    ], 
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;