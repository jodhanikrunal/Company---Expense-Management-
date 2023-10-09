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
import routes from "routes.js";
import { MdBarChart, MdDashboard } from "react-icons/md";
import CreateNewExpense from "./CreateNewExpense.jsx";
import axios from 'axios';

import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function Expense(props) {
  const { columnsData } = props;
  const { id } = useParams();
  console.log("ID in Expense : ", id);

  const columns = useMemo(() => columnsData, [columnsData]);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const location = useLocation();

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
    getActiveRoute(routes);
  }, [location.pathname]);

  const fetchData = () => {
    // Fetch data from your API endpoint
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
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].layout + "/" + routes[i].path) !== -1) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
    </>
  );
}
