import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateNewExpense.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextareaAutosize from "react-textarea-autosize";
// import axios from "axios";

export default function CreateNewExpense() {
  const { id } = useParams();
  // console.log("ID in CreateNewExpense: ", id);

  const [isFormOpen, setIsFormOpen] = useState(true);

  const [expenseData, setExpenseData] = useState({
    expenseName: "",
    amount: "",
    date: null,
    category: "",
    currency: "",
    documents: "",
    paymentMethod: "",
    receiverName: "",
    taxPercentage: "",
    notes: "",
    taxAmount: "",
  });

  const handleFileUpload = (e) => {
    // console.log("Handle File Upload : ",e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const fileName = file.name;
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

  const handleAddExpense = async (e) => {
    // console.log("Clicked!!!!");
    e.preventDefault();

    const taxAmountWithoutCurrency = parseFloat(expenseData.taxAmount);

    const data = {
      project: id,
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
      // taxAmount: expenseData.taxAmount,
      taxAmount: taxAmountWithoutCurrency,

    };

    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    // formData.forEach((value, key) => {
    //   console.log(`${key}: ${value}`);
    // });

    try {
      const response = await fetch("http://localhost:4000/addExpense", {
        method: "POST",
        body: formData,
      });

      // console.log("Response before if : ", response.json());

      if (response.status === 200) {
        const responseData = await response.json();
        console.log("Response from server:", responseData);
        toast.success("Expense Added Successfully", {
          position: toast.CENTER,
          autoClose: 2000,
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
    <div className={`create-new-expense ${isFormOpen ? "" : "hidden"}`}>
      <form onSubmit={handleAddExpense} className="expense-form">
        <div className="column">
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
                // calculateTaxAmount(); // Calculate tax amount when amount changes
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
        </div>

        <div className="column">
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
                // calculateTaxAmount(); // Calculate tax amount when tax percentage changes
              }}
              onKeyPress={handleKeyPress}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="taxAmount">Tax Amount</label>
            <br />
            <p id="taxAmount">
            {/* {expenseData.taxAmount.toFixed(2)} {expenseData.currency} */}
               {expenseData.taxAmount}
            </p>
            {/* {expenseData.currency} */}
          </div>

          <div className="input-group">
            <label htmlFor="notes">Notes</label>
            <br />
            <TextareaAutosize
              id="notes"
              name="notes"
              value={expenseData.notes}
              onChange={handleChange}
              minRows={3}
              maxRows={10}
            />
          </div>
        </div>

        <button type="submit" className="add-expense-button">
          <b>Add Expense</b>
        </button>
      </form>
    </div>
  );
}
