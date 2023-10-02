require("dotenv").config({ path: "../.env" });
const Register = require("../Models/Register");
const Expense = require("../Models/Expense");
const { expenseValidator } = require("../Services/Validators/expenseValidator");
// const sendMail = require("../Services/mailService");

exports.addExpense = async (req, res) => {
    const { error } = expenseValidator.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        project = req.body.project;
        const {
            expenseName,
            expenseAmount,
            expenseDate,
            expenseCategory,
            expenseCurreency,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        } = req.body;

        const expense = new Expense({
            project,
            expenseName,
            expenseAmount,  
            expenseDate,
            expenseCategory,
            expenseCurreency,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        });
        const savedExpense = await expense.save();
        
        if(savedExpense){
            return res.status(200).json({ message: "Expense added successfully" });
        }
        else{
            return res.status(400).json({ message: "Failed to add Expense."});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.uploadDocument = async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (expense) {
            expense.expenseDocument = req.file.path;
            const updatedExpense = await expense.save();
            if (updatedExpense) {
                return res.status(200).json({ message: "Expense Document uploaded successfully" });
            }
            else {
                return res.status(400).json({ message: "Failed to upload Expense Document." });
            }
        }
        else {
            return res.status(400).json({ message: "Expense not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}