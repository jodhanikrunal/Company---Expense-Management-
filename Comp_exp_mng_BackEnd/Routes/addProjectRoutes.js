const{
    addProject,
}= require('../Controllers/addProjectController');
const authMiddleware = require('../Middlewares/AuthMiddleware');

const addProjectRoutes = (app) => {
    app.post("/addProject",authMiddleware,addProject);
}
 
module.exports = addProjectRoutes;