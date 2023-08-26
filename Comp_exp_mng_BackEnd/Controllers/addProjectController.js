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
        const company = "64d8fdf8f352e57d2c30a467";//req.user._id;
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
            company,
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
