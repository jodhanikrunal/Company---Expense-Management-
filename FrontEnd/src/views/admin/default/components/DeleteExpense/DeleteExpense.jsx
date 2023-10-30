import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DeleteExpense.css"; 

export default function DeleteExpense({ expense, onClose }) {

  const handleDelete = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const expenseID = expense._id;
    // console.log("Project ID: ", projectID);

    try {
      const response = await fetch(`http://localhost:4000/removeExpense/${expenseID}`, {
        method: "DELETE",
        headers: {
          "Authorization": `${jwtToken}`, 
        },
      });
      const data = await response.json(); 
      // console.log("DATA: ", data);

      if (response.ok) { 
        toast.success("Expense Deleted Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        console.error("Delete failed:", data.error);
        toast.error("Can't Delete Expense", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Error Deleting Project", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="delete-project-modal">
      <h2 className="maintext">  Confirm Deletion </h2>
      <p>Are you sure you want to delete this Expense?</p>
      <div className="modal-buttons">
        <button type="button" onClick={handleDelete} className="delete-button">
          Delete
        </button>
        <button type="button" onClick={onClose} className="testclose">
          Close
        </button>
      </div>
    </div>
  );
}