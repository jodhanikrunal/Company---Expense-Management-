require("dotenv").config({ path: "../.env" });
const Expense = require("../Models/Expense");
const Project = require("../Models/Projects");
const { expenseValidator } = require("../Services/Validators/expenseValidator");

exports.addExpense = async (req, res) => {
    try {
        const {
            expenseName,
            expenseAmount,
            expenseDate,
            expenseCategory,
            expenseCurrency,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        } = req.body;

        const expense = new Expense({
            project: req.body.project,
            expenseName,
            expenseAmount,
            expenseDate,
            expenseCategory,
            expenseCurrency,
            expenseDocument: req.fileUrl,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        });

        const savedExpense = await expense.save();

        if (savedExpense) {
            return res.status(200).json({ message: "Expense added successfully" });
        } else {
            return res.status(400).json({ message: "Failed to add Expense." });
        }
    } catch (error) {
        console.error("Error in addExpense:", error);
        res.status(500).json({ message: error.message }); 
        
    }
};

exports.editExpense = async (req, res) => {
    try {
        const expenseId = req.params.expenseId; 
        // console.log("ID : ",expenseId);
        const {
            expenseName,
            expenseAmount,
            expenseDate,
            expenseCategory,
            expenseCurrency,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        } = req.body;

        // console.log(req.body);

        const updatedExpenseData = {
            expenseName,
            expenseAmount,
            expenseDate,
            expenseCategory,
            expenseCurrency,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        };

        // console.log("Updated Data: ",updatedExpenseData);

        const updatedExpense = await Expense.findByIdAndUpdate(expenseId, updatedExpenseData);

        if (updatedExpense) {
            return res.status(200).json({ message: "Expense updated successfully" });
        } else {
            return res.status(400).json({ message: "Failed to update expense." });
        }
    } catch (error) {
        console.error("Error in editExpense:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.removeExpense = async (req, res) => {
    try {
        const expenseId = req.params.expenseId; 

        const removedExpense = await Expense.findByIdAndRemove(expenseId);

        if (removedExpense) {
            return res.status(200).json({ message: "Expense removed successfully" });
        } else {
            return res.status(400).json({ message: "Failed to remove expense." });
        }
    } catch (error) {
        console.error("Error in removeExpense:", error);
        res.status(500).json({ message: error.message });
    }
};
