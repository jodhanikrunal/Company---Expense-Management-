// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function DeleteProject ({ project }){

//   const handleDelete = () => {
//     const jwtToken = localStorage.getItem("jwtToken");

//     if (!jwtToken) {
//       console.error("JWT token not found in local storage.");
//       return;
//     }

//     const projectID = project._id;

//     fetch(`http://localhost:4000/removeProject/${projectID}`, {
//       method: "DELETE",
//       headers: {
//         "Authorization": `${jwtToken}`, // Add the JWT token to the request headers
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           toast.success("Project Deleted Successfully", {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 3000,
//           });
//         } else {
//           console.error("Delete failed:", data.error);
//           toast.error("Can't Delete Project", {
//             position: toast.POSITION.TOP_RIGHT,
//             autoClose: 3000,
//           });
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting project:", error);
//       });
//   };

//   const handleCancel = () => { 

//   }

//   return (
//     <div className="delete-project-modal">
//       <h2>Confirm Deletion</h2>
//       <p>Are you sure you want to delete this project?</p>
//       <div className="modal-buttons">
//         {/* <button type="button" onClick={handleCancel}>Cancel</button> */}
//         <button type="button" onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// };

// if (!jwtToken) {
//   console.error("JWT token not found in local storage.");
//   return;
// }

// import React from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import './DeleteProject.css';

// export default function DeleteProject({ project }) {

//   const handleDelete = async () => {
//     const jwtToken = localStorage.getItem("jwtToken");
//     const projectID = project._id;
//     console.log("Project ID : ", projectID);

//     try {
//       const response = await fetch(`http://localhost:4000/removeProject/${projectID}`, {
//         method: "DELETE",
//         headers: {
//           "Authorization": `${jwtToken}`, 
//         },
//       });
//       const data = await response.json(); 
//       console.log("DATA : ",data);
//       if (data.success) {
//         toast.success("Project Deleted Successfully", {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 3000,
//         });
//       } else {
//         console.error("Delete failed:", data.error);
//         // toast.error("Can't Delete Project", {
//         //   position: toast.POSITION.TOP_RIGHT,
//         //   autoClose: 3000,
//         // });
//       }
//     } catch (error) {
//       console.error("Error deleting project:", error);
//       // toast.error("Error Deleting Project", {
//       //   position: toast.POSITION.TOP_RIGHT,
//       //   autoClose: 3000,
//       // });
//     }
//   };


//   return (
//     <div className="delete-project-modal">
//       <h2>Confirm Deletion</h2>
//       <p>Are you sure you want to delete this project?</p>
//       <div className="modal-buttons">
//         <button type="button" onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// }




import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DeleteProject.css"; 

export default function DeleteProject({ project, onClose }) {

  const handleDelete = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const projectID = project._id;
    console.log("Project ID: ", projectID);

    try {
      const response = await fetch(`http://localhost:4000/removeProject/${projectID}`, {
        method: "DELETE",
        headers: {
          "Authorization": `${jwtToken}`, 
        },
      });
      const data = await response.json(); 
      // console.log("DATA: ", data);

      if (response.ok) { 
        toast.success("Project Deleted Successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        console.error("Delete failed:", data.error);
        toast.error("Can't Delete Project", {
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
      <h2 className="maintext">Confirm Deletion</h2>
      <p>Are you sure you want to delete this project?</p>
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
