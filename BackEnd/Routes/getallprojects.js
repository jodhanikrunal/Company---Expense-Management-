const getallprojects = require('../Controllers/getallprojects');

const getallprojectRoutes = (app) => {
    app.get("/allprojects", getallprojects);
}

module.exports = getallprojectRoutes;