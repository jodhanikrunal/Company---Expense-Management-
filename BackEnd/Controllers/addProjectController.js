require("dotenv").config({ path: "../.env" });
const Register = require("../Models/Register");
const Project = require("../Models/Projects");
const { ProjectValidator } = require("../Services/Validators/projectValidator");
const sendMail = require("../Services/mailService");

exports.addProject = async (req, res) => {
    const { error } = ProjectValidator.validate(req.body);
    // if (error) {
    //     return res.status(400).json({ message: error.details[0].message });
    // }
    try {
        const company = req.user._id;
        const {
            projectTitle, 
            projectDescription, 
            maxBudget, 
            startDate, 
            endDate, 
            projectManager, 
            progress, 
            projectMembers
        } = req.body;

        const project = new Project({
            company,
            projectTitle,
            projectDescription,
            maxBudget,
            startDate,
            endDate,
            projectManager,
            progress,
            projectMembers
        });
        const savedProject = await project.save();
        
        if(savedProject){
            return res.status(200).json({ message: "Project added successfully" });
        }
        else{
            return res.status(400).json({ message: "Failed to add Project."});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };
