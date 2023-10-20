require("dotenv").config({ path: "../.env" });
const Register = require("../Models/Register");
const Project = require("../Models/Projects");
const { ProjectValidator } = require("../Services/Validators/projectValidator");

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

exports.editProject = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; 
        const projectId = req.params.projectId;
        
        const project = await Project.findOne({ _id: projectId, company: loggedInUserId });

        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }

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

        // Update the project fields
        project.projectTitle = projectTitle;
        project.projectDescription = projectDescription;
        project.maxBudget = maxBudget;
        project.startDate = startDate;
        project.endDate = endDate;
        project.projectManager = projectManager;
        project.progress = progress;
        project.projectMembers = projectMembers;

        const updatedProject = await project.save();

        if (updatedProject) {
            return res.status(200).json({ message: "Project updated successfully" });
        } else {
            return res.status(400).json({ message: "Failed to update Project." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeProject = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const projectId = req.params.projectId;

        // Check if the project exists and belongs to the logged-in company
        const project = await Project.findOne({ _id: projectId, company: loggedInUserId });

        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }

        await Project.findByIdAndRemove(projectId);

        return res.status(200).json({ message: "Project removed successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
