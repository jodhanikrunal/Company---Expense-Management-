// import React, { useMemo,useState } from "react";
// import Modal from 'react-modal';
// import { Link, useLocation,useParams } from "react-router-dom"; 
// import CardMenu from "components/card/CardMenu";
// import Checkbox from "components/checkbox";
// import Card from "components/card"; 
// import Widget from "components/widget/Widget";
// import { MdBarChart, MdDashboard } from "react-icons/md";
// import Navbar from "components/navbar";
// import routes from "routes.js";
// import CreateNewExpense from "./CreateNewExpense.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

// export default function Expense(props) {

//   const { columnsData, tableData } = props;

//   const {id} = useParams();
//   console.log("ID in Expense : ",id);

//   const columns = useMemo(() => columnsData, [columnsData]);
//   const data = useMemo(() => tableData, [tableData]);

//   const [open, setOpen] = React.useState(true);
//   const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

//   const tableInstance = useTable(
//     {
//       columns,
//       data,
//     },
//     useGlobalFilter,
//     useSortBy,
//     usePagination
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     initialState,
//   } = tableInstance;
//   initialState.pageSize = 11;

//   const location = useLocation(); // Get the current location

//   React.useEffect(() => {
//     getActiveRoute(routes); // Call getActiveRoute with the routes defined somewhere
//   }, [location.pathname]);

//   const getActiveRoute = (routes) => {
//     let activeRoute = "Main Dashboard";
//     for (let i = 0; i < routes.length; i++) {
//       if (
//         window.location.href.indexOf(
//           routes[i].layout + "/" + routes[i].path
//         ) !== -1
//       ) {
//         setCurrentRoute(routes[i].name);
//       }
//     }
//     return activeRoute;
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };


//   return (
//     <>
//       <div className="mb-4 flex flex-col">
//         <Navbar
//           onOpenSidenav={() => setOpen(true)}
//           logoText={"Horizon UI Tailwind React"}
//           brandText={currentRoute} 
//         // secondary={getActiveNavbar(routes)} 
//         // {...rest}
//         />
//         <div className="mt-8 w-1/6"> 
//           <Link to ={`/project/${id}`}  onClick={openModal} >
//             <Widget 
//               icon={<MdBarChart className="h-7 w-7" />}
//               title={"Add New Expense"}   
//             />
//           </Link>

//           <Modal
//             isOpen={isOpen}
//             onRequestClose={closeModal}
//             contentLabel="Add Expense Modal"
//             className="custom-modal"
//             overlayClassName="custom-modal-overlay"
//           >
//             <div className="modal-content">
//               <CreateNewExpense className="create-expense" />
//               <ToastContainer />
//               <button className="close-button" onClick={closeModal}>
//                 Close
//               </button>
//             </div>
//           </Modal>

//         </div>
//       </div>

//       <Card extra={"w-full h-full sm:overflow-auto px-6"}>
//         <header className="relative flex items-center justify-between pt-4">
//           <div className="text-xl font-bold text-navy-700 dark:text-white">
//             All Projects
//           </div>

//           <CardMenu />
//         </header>

//         <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
//           <table
//             {...getTableProps()}
//             className="w-full"
//             variant="simple"
//             color="gray-500"
//             mb="24px"
//           >
//             <thead>
//               {headerGroups.map((headerGroup, index) => (
//                 <tr {...headerGroup.getHeaderGroupProps()} key={index}>
//                   {headerGroup.headers.map((column, index) => (
//                     <th
//                       {...column.getHeaderProps(column.getSortByToggleProps())}
//                       className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
//                       key={index}
//                     >
//                       <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
//                         {column.render("Header")}
//                       </div>
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//               {page.map((row, index) => {
//                 prepareRow(row);
//                 return (
//                   <tr {...row.getRowProps()} key={index}>
//                     {row.cells.map((cell, index) => {
//                       let data = "";
//                       if (cell.column.Header === "Project Name") {
//                         data = (
//                           <div className="flex items-center gap-2">
//                             {/* <Checkbox /> */}
//                             <p className="text-sm font-bold text-navy-700 dark:text-white">
//                               {cell.value[0]}
//                             </p>
//                           </div>
//                         );
//                       } else if (cell.column.Header === "Project Manager") {
//                         data = (
//                           <div className="flex items-center">
//                             <p className="text-sm font-bold text-navy-700 dark:text-white">
//                               {cell.value}
//                             </p>
//                           </div>
//                         );
//                       } else if (cell.column.Header === "Max. Budget") {
//                         data = (
//                           <p className="text-sm font-bold text-navy-700 dark:text-white">
//                             {" "}
//                             {cell.value}{" "}
//                           </p>
//                         );
//                       } else if (cell.column.Header === "End Date") {
//                         data = (
//                           <p className="text-sm font-bold text-navy-700 dark:text-white">
//                             {cell.value}
//                           </p>
//                         );
//                       }
//                       return (
//                         <td
//                           {...cell.getCellProps()}
//                           key={index}
//                           className="pt-[14px] pb-[16px] sm:text-[14px]"
//                         >
//                           {data}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </Card>
//     </>
//   );
// };


import React, { useMemo, useState, useEffect } from "react";
import Modal from 'react-modal';
import { Link, useLocation, useParams } from "react-router-dom";
import Card from "components/card";
import Widget from "components/widget/Widget";
import Navbar from "components/navbar";
// import routes from "routes.js";
import { MdBarChart, MdDashboard } from "react-icons/md";
import CreateNewExpense from "../AddExpense/CreateNewExpense";
import EditExpense from '../EditExpense/EditExpense';
import DeleteExpense from '../DeleteExpense/DeleteExpense';
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import { PDFDocument, rgb } from 'pdf-lib';
import { createCanvas, loadImage } from 'canvas';


import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function Expense() {
  // const { columnsData } = props;

  const { id } = useParams();
  
  // console.log("ID in Expense : ", id);

  // const columns = useMemo(() => columnsData, [columnsData]);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const location = useLocation();

  const openEditModal = (expense) => {
    setSelectedExpense(expense);
    setIsEditModalOpen(true);
  };

  
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    // setSelectedExpense(null);
  };
  
  const openDeleteModal = (expense) => {
    setSelectedExpense(expense);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    // setSelectedExpense(null);
    setIsDeleteModalOpen(false);
  };

  const columns = useMemo(() => [
    // Define your columns here
    {
      Header: "Edit",
      accessor: "editIcon",
      Cell: ({ row }) => (
        <Link
          to={`/project/${id}`}
          className="text-sm font-bold text-navy-700 dark:text-white"
          onClick={() => openEditModal(row.original)}
        >
          <i className="fa fa-edit"></i>
        </Link>
      ),
    },
    {
      Header: "Expense Name",
      accessor: "expenseName",    
    },
    {
      Header: "Reciever Name",
      accessor: "recieverName", 
    },
    {
      Header: "Expense Amount",
      accessor: "expenseAmount", 
    },
    {
      Header: "Expense Currency",
      accessor: "expenseCurrency", 
    },
    {
      Header: "End Date",
      accessor: "expenseDate", 
      Cell: ({ value }) => {
        const date = new Date(value);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return formattedDate;
      },
    },
    {
      Header: "Delete",
      accessor: "deleteIcon",
      Cell: ({ row }) => (
        <Link
          to={`/project/${id}`}
          className="text-sm font-bold text-navy-700 dark:text-white"
          onClick={() => openDeleteModal(row.original)}
        >
          <i className="fa fa-trash"></i>
        </Link>
      ),
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }) => (
        <div>
          <button onClick={() => generatePDF(row.original)}>Download PDF</button>
        </div>
      ),
    },
  ], []);

  useEffect(() => {
    fetchProjectName(id);
    fetchData(); 
  }, [location.pathname]);

  const fetchData = () => {
    fetch(`http://localhost:4000/getexpense/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);

        if (data && data.projectName) {
          setCurrentRoute(data.projectName);
        }

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  const fetchProjectName = (id) => {
    fetch(`http://localhost:4000/getprojectName/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCurrentRoute(data.projectTitle);
      })
      .catch((error) => {
        console.error("Error fetching project name:", error);
      });
  };
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
  } = tableInstance;

  state.pageSize = 11;

  const generatePDF = async (expense) => {
    if (expense && expense.expenseDocument) {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      const { width, height } = page.getSize();
      const pdfTitle = 'Expense Details';
  
      page.drawText(pdfTitle, {
        x: 200,
        y: height - 50,
        size: 30,
        color: rgb(0, 0, 0),
      });
  
      // Add the additional fields
      page.drawText(`Expense Name: ${expense.expenseName}`, {
        x: 10,
        y: height - 100,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Receiver Name: ${expense.recieverName}`, {
        x: 10,
        y: height - 120,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Expense Amount: ${expense.expenseAmount}`, {
        x: 10,
        y: height - 140,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Expense Currency: ${expense.expenseCurrency}`, {
        x: 10,
        y: height - 160,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Expense Date: ${expense.expenseDate}`, {
        x: 10,
        y: height - 180,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Category: ${expense.expenseCategory}`, {
        x: 10,
        y: height - 200,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Payment Method: ${expense.paymentMethod}`, {
        x: 10,
        y: height - 220,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Tax Percentage: ${expense.taxPercentage}`, {
        x: 10,
        y: height - 240,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Tax Amount: ${expense.taxAmount}`, {
        x: 10,
        y: height - 260,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      page.drawText(`Notes: ${expense.notes}`, {
        x: 10,
        y: height - 280,
        size: 14,
        color: rgb(0, 0, 0),
      });
  
      // Continue with adding expense documents as before
  
      // const links = expense.expenseDocument.split(',');
  
      // Define the y-coordinate for the first document image
      // let y = height - 300;
  
      // for (const link of links) {
      //   if (link.endsWith('.pdf')) {
      //     // If it's a PDF, add it as a new page
      //     const pdfBytes = await fetch(link).then((res) => res.arrayBuffer());
      //     const externalPdf = await PDFDocument.load(pdfBytes);
      //     const [externalPage] = await pdfDoc.copyPages(externalPdf, [0]);
      //     pdfDoc.addPage(externalPage);
      //   } else if (link.endsWith('.jpg') || link.endsWith('.jpeg')) {
      //     // If it's a JPEG/JPG image, add it to the current page
      //     const imageBytes = await fetch(link).then((res) => res.arrayBuffer());
      //     const image = await pdfDoc.embedJpg(imageBytes);
      //     page.drawImage(image, {
      //       x: 50,
      //       y: y - 100,
      //       width: 500,
      //       height: 300,
      //     });
      //   }
      //   // Increase the y-coordinate to position the next document
      //   y -= 300;
      // }
  
      const pdfBytes = await pdfDoc.save();

    // Create a blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Create a URL for the blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Create a download link
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'ExpenseDetails.pdf';
    
    // Simulate a click on the link to trigger the download
    a.click();

    // Clean up the URL and link
    URL.revokeObjectURL(pdfUrl);
    }
  };
  
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="mb-4 flex flex-col">
        <Navbar
          onOpenSidenav={() => setOpen(true)}
          logoText={"Horizon UI Tailwind React"}
          brandText={currentRoute}
        />
        <div className="mt-8 w-1/6">
          <Link to={`/project/${id}`} onClick={openModal}>
            <Widget
              icon={<MdBarChart className="h-7 w-7" />}
              title={"Add New Expense"}
            />
          </Link>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Add Expense Modal"
            className="custom-modal"
            overlayClassName="custom-modal-overlay"
          >
            <div className="modal-content">
              <CreateNewExpense className="create-expense" />
              <button className="close-button" onClick={closeModal}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>

      <Card extra={"w-full h-full sm:overflow-auto px-6"}>
        <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            All Expenses
          </div>
        </header>

        <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
          <table
            {...getTableProps()}
            className="w-full"
            variant="simple"
            color="gray-500"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    >
                      <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className="pt-[14px] pb-[16px] sm:text-[14px]"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        contentLabel="Edit Expense Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
          <EditExpense
            expense={selectedExpense}
          />
          <button className="close-button" onClick={closeEditModal}>
            Close
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Expense Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
          <DeleteExpense
            expense={selectedExpense}
            onClose={closeDeleteModal}
          />
        </div>
      </Modal>
    </>
  );
}
