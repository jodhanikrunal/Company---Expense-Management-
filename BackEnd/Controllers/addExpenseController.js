//By Rj Fachara

require("dotenv").config({ path: "../.env" });
const Expense = require("../Models/Expense");
const project = require("../Models/Projects");
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
        
        // project = req.body.project;
        // console.log("Project : ",project);
        // console.log(req.body);

        const expense = new Expense({
            project:req.body.project,
            expenseName,
            expenseAmount,  
            expenseDate,
            expenseCategory,
            expenseCurrency,
            expenseDocument : req.fileUrl,
            paymentMethod,
            recieverName,
            taxPercentage,
            notes,
            taxAmount,
        });
        const savedExpense = await expense.save();
        // console.log("Saved:",savedExpense);
        if(savedExpense){
            // console.log("Inside IF");
            return res.status(200).json({ message: "Expense added successfully" });
        }
        else{
            // console.log("Inside Else");
            return res.status(400).json({ message: "Failed to add Expense."});
        }
    } catch (error) {
        console.error("Error in addExpense:", error);
        res.status(500).json({ message: error.message });
    }
};

