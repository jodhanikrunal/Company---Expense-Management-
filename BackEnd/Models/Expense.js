const mongoose = require("mongoose");

const ExpenseSchema = mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
      },
    expenseName: {
        type: String,
        required: true,
    },
    expenseAmount: {
        type: Number,
        required: true,
    },
    expenseDate: {
        type: Date,
        default: Date.Now,
    },
    expenseCategory: {
        type: String,
        required: true,
    },
    expenseCurrency: {
        type: String,
        required: true,
    },
    expenseDocument: {
        type: String
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    recieverName: {
        type: String,
        required: true,
    },
    taxPercentage: {
        type: Number,
        required: true,
    },
    notes: {    
        type: String,
        required: true,
    },
    taxAmount: {
        type: Number,
        required: true,
    },
});

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;