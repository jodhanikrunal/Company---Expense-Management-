require("dotenv").config({ path: "../.env" });
const Project = require("../Models/Projects");

exports.getprojectName = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const project = await Project.findOne({ _id: projectId});

        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }

        return res.status(200).json({ projectTitle: project.projectTitle });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
