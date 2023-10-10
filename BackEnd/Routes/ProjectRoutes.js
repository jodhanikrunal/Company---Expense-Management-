const { addProject, editProject, removeProject } = require('../Controllers/addProjectController');
const { getallprojects } = require('../Controllers/getallprojects');

const authMiddleware = require('../Middlewares/AuthMiddleware');

const ProjectRoutes = (app) => {
    app.post("/addProject", authMiddleware, addProject);
    app.get("/allprojects", authMiddleware, getallprojects);
    app.put("/editProject/:projectId", authMiddleware, editProject);
    app.delete("/removeProject/:projectId", authMiddleware, removeProject);
};

module.exports = ProjectRoutes;
