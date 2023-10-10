const fileUploaderMiddleware = require("../Middlewares/fileUploadMiddleware");
const { addExpense, removeExpense, editExpense } = require('../Controllers/addExpenseController');
const { getexpense } = require('../Controllers/getexpense');
const authMiddleware = require('../Middlewares/AuthMiddleware');

const ExpenseRoute = (app) => {
  app.post("/addExpense", fileUploaderMiddleware, addExpense);
  app.get("/getexpense/:projectId", getexpense);
  app.delete("/removeExpense/:expenseId", removeExpense);
  app.put("/editExpense/:expenseId", editExpense);
};

module.exports = ExpenseRoute;
