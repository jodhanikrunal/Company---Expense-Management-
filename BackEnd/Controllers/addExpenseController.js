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

exports.removeExpense = async (req, res) => {
    try {
        const projectId = req.params.projectId;

        // Perform project removal logic (e.g., using Mongoose)
        await Project.findByIdAndRemove(projectId);

        return res.status(200).json({ message: "Project removed successfully" });
    } catch (error) {
        console.error("Error in removeProject:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.editExpense = async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const updatedData = req.body;

        // Perform project update logic (e.g., using Mongoose)
        await Project.findByIdAndUpdate(projectId, updatedData);

        return res.status(200).json({ message: "Project edited successfully" });
    } catch (error) {
        console.error("Error in editProject:", error);
        res.status(500).json({ message: error.message });
    }
};
