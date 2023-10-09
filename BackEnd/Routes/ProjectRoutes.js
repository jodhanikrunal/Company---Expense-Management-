const { addProject } = require('../Controllers/addProjectController');
const { getallprojects } = require('../Controllers/getallprojects');

const authMiddleware = require('../Middlewares/AuthMiddleware');

const ProjectRoutes = (app) => {
    app.post("/addProject", authMiddleware, addProject);
    app.get("/allprojects", authMiddleware, getallprojects);
}

module.exports = ProjectRoutes;