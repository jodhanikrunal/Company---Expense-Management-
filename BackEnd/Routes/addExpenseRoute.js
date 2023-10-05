// const multer = require("multer");
const fileUploaderMiddleware = require("../Middlewares/fileUploadMiddleware");
const { addExpense } = require('../Controllers/addExpenseController');
// const authMiddleware = require('../Middlewares/AuthMiddleware');

const addExpenseRoute = (app) => {
  app.post("/addExpense", fileUploaderMiddleware, addExpense);
}

module.exports = addExpenseRoute
