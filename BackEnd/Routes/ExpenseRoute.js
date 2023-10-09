const fileUploaderMiddleware = require("../Middlewares/fileUploadMiddleware");
const { addExpense } = require('../Controllers/addExpenseController');
const { getexpense } = require('../Controllers/getexpense');
const authMiddleware = require('../Middlewares/AuthMiddleware');

const ExpenseRoute = (app) => {
  app.post("/addExpense", fileUploaderMiddleware, addExpense);
  app.get("/getexpense/:projectId" , getexpense);
}

module.exports = ExpenseRoute;
