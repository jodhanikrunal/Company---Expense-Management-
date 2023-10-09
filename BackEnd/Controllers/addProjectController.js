require("dotenv").config({ path: "../.env" });
const Register = require("../Models/Register");
const Project = require("../Models/Projects");
const { ProjectValidator } = require("../Services/Validators/projectValidator");
const sendMail = require("../Services/mailService");

exports.addProject = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; 
        
        const company = await Register.findOne({ _id: loggedInUserId });
        
        if (!company) {
            return res.status(404).json({ message: "Company not found." });
        }
        // const { error } = ProjectValidator.validate(req.body);
        // if (error) {
            // return res.status(400).json({ message: error.details[0].message });
        // }

        const {
            projectTitle, 
            projectDescription, 
            maxBudget, 
            startDate, 
            endDate, 
            projectManager, 
            progress, 
            status,
            projectMembers
        } = req.body;

        const project = new Project({
            company: company._id, // Store the MongoDB ID of the logged-in company
            projectTitle,
            projectDescription,
            maxBudget,
            startDate,
            endDate,
            projectManager,
            progress,
            status,
            projectMembers
        });

        const savedProject = await project.save();
        
        if (savedProject) {
            return res.status(200).json({ message: "Project added successfully" });
        } else {
            return res.status(400).json({ message: "Failed to add Project." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
