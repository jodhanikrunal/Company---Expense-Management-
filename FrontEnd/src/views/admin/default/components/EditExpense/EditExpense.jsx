import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import './EditExpense.css'

export default function EditExpense({ expense }) {
    const { id } = useParams();

    const expenseId = expense._id;

    // console.log("ID of Expense : ",expenseId);

    const [expenseData, setExpenseData] = useState({
        expenseName: expense.expenseName,
        amount: expense.expenseAmount,
        date: new Date(expense.expenseDate),
        category: expense.expenseCategory,
        currency: expense.expenseCurrency,
        documents: expense.expenseDocument,
        paymentMethod: expense.paymentMethod,
        receiverName: expense.recieverName,
        taxPercentage: expense.taxPercentage,
        notes: expense.notes,
        taxAmount: expense.taxAmountWithoutCurrency,
    });

    const [isFormOpen, setIsFormOpen] = useState(true);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // const fileName = file.name;
            setExpenseData({
                ...expenseData,
                documents: file,
            });
        }
    };

    useEffect(() => {
        // Calculate "Tax Amount" whenever "Amount" or "Tax Percentage" changes
        const amount = parseFloat(expenseData.amount);
        const curr = expenseData.currency;
        const taxPercentage = parseFloat(expenseData.taxPercentage);

        if (!isNaN(amount) && !isNaN(taxPercentage)) {
            const calculatedTaxAmount = (amount * taxPercentage) / 100;
            setExpenseData({
                ...expenseData,
                taxAmount: calculatedTaxAmount.toFixed(2) + " " + curr,
            });
        }
    }, [expenseData.amount, expenseData.taxPercentage]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "amount" && !/^\d*\.?\d*$/.test(value)) {
            return;
        }

        if (name === "taxPercentage" && value > 100) {
            return;
        }

        if (
            (name === "expenseName" ||
                name === "category" ||
                name === "receiverName") &&
            /^\d+$/.test(value)
        ) {
            return;
        }

        setExpenseData({
            ...expenseData,
            [name]: value,
        });
    };


    const handleKeyPress = (e) => {
    // Allow only digits and prevent 'e' character
    if (!/^\d+$/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleDateChange = (date) => {
    setExpenseData({
      ...expenseData,
      date,
    });
  };

    const handleEditExpense = async (e) => {
        e.preventDefault();

        const taxAmountWithoutCurrency = parseFloat(expenseData.taxAmount);

        const data = {
            expenseName: expenseData.expenseName,
            expenseAmount: expenseData.amount,
            expenseDate: expenseData.date,
            expenseCategory: expenseData.category,
            expenseCurrency: expenseData.currency,
            expenseDocument: expenseData.documents,
            paymentMethod: expenseData.paymentMethod,
            recieverName: expenseData.receiverName,
            taxPercentage: expenseData.taxPercentage,
            notes: expenseData.notes,
            taxAmount: taxAmountWithoutCurrency,
        };

        const formData = new FormData();

        for (const key in data) {
          formData.append(key, data[key]);
        }

        try {
            const response = await fetch(`http://localhost:4000/editExpense/${expenseId}`, {
              method: "PUT",
              body: formData,
            });
            
            if (response.status === 200) {
              const responseData = await response.json();
            //   console.log("Response from server:", responseData);
              toast.success("Expense Edited Successfully", {
                position: toast.TOP_RIGHT,
                autoClose: 3000,
                onClose: () => {
                  setIsFormOpen(false);
                },
              });
            } else {
              console.error("Request failed with status: " + response.statusText);
            }
          } catch (error) {
            console.error("Error in Catch Block:", error);
          }
    };

    return (
        <div className={`edit-expense ${isFormOpen ? "" : "hidden"}`}>
            <form onSubmit={handleEditExpense}>
                <div className="expense-form">
                    <div className="input-group">
                        <label htmlFor="expenseName">Expense Name</label>
                        <input
                            type="text"
                            id="expenseName"
                            name="expenseName"
                            value={expenseData.expenseName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="amount">Amount</label>
                        <br />
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={expenseData.amount}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            onKeyPress={handleKeyPress}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="date">Date</label>
                        <br />
                        <DatePicker
                            selected={expenseData.date}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="category">Category</label>
                        <br />
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={expenseData.category}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="currency">Currency</label>
                        <br />
                        <select
                            id="currency"
                            name="currency"
                            value={expenseData.currency}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Currency</option>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="documents">Upload Documents</label>
                        <input
                            type="file"
                            id="documents"
                            name="documents"
                            accept=".jpg, .jpeg, .pdf"
                            onChange={handleFileUpload}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <br />
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={expenseData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Online">Online</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="receiverName">Receiver's Name</label>
                        <input
                            type="text"
                            id="receiverName"
                            name="receiverName"
                            value={expenseData.receiverName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="taxPercentage">Tax Percentage</label>
                        <input
                            type="number"
                            id="taxPercentage"
                            name="taxPercentage"
                            value={expenseData.taxPercentage}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            onKeyPress={handleKeyPress}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="taxAmount">Tax Amount</label>
                        <br />
                        <p id="taxAmount">{expenseData.taxAmount}</p>
                    </div>

                    <button type="submit" className="edit-expense-button">
                    <b>Save</b>
                </button>

                    <div className="input-group-notes">
                        <label htmlFor="notes">Notes</label>
                        <br />
                        <TextareaAutosize
                            id="notes"
                            name="notes"
                            value={expenseData.notes}
                            onChange={handleChange}
                            minRows={1.5}
                            maxRows={10}
                        />
                    </div>

                   
                    
                </div>

                
            </form>
        </div>
    );
}
