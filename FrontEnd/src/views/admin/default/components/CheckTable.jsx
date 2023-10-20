// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import CardMenu from "components/card/CardMenu";
// import Checkbox from "components/checkbox";
// import Card from "components/card";
// import Expense from './Expense';

// import {
//   useGlobalFilter,
//   usePagination,
//   useSortBy,
//   useTable,
// } from "react-table";

// export default function CheckTable(props){
//   const { columnsData, tableData } = props;

//   const columns = useMemo(() => columnsData, [columnsData]);
//   const data = useMemo(() => tableData, [tableData]);

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

//   return (
//     <>

//     <Card extra={"w-full h-full sm:overflow-auto px-6"}>

//       <header className="relative flex items-center justify-between pt-4">
//         <div className="text-xl font-bold text-navy-700 dark:text-white">
//           All Projects
//         </div>

//         <CardMenu />
//       </header>

//       <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
//         <table
//           {...getTableProps()}
//           className="w-full"
//           variant="simple"
//           color="gray-500"
//           mb="24px"
//           >
//           <thead>
//             {headerGroups.map((headerGroup, index) => (
//               <tr {...headerGroup.getHeaderGroupProps()} key={index}>
//                 {headerGroup.headers.map((column, index) => (
//                   <th
//                     {...column.getHeaderProps(column.getSortByToggleProps())}
//                     className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
//                     key={index}
//                   >
//                     <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
//                       {column.render("Header")}
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row, index) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()} key={index}>
//                   {row.cells.map((cell, index) => {
//                     let data = "";
//                     if (cell.column.Header === "Project Name") {
//                       data = (
//                         <div className="flex items-center gap-2">
//                           {/* <Checkbox /> */}
//                           <Link
//                             to={`/project/${encodeURIComponent(cell.value[0])}`}
//                             className="text-sm font-bold text-navy-700 dark:text-white"
//                             >
//                             {cell.value[0]}
//                           </Link>
//                           {/* <p className="text-sm font-bold text-navy-700 dark:text-white">
//                             {cell.value[0]}
//                           </p> */}
//                         </div>
//                       );
//                     } else if (cell.column.Header === "Project Manager") {
//                       data = (
//                         <div className="flex items-center">
//                           <p className="text-sm font-bold text-navy-700 dark:text-white">
//                             {cell.value}
//                           </p>
//                         </div>
//                       );
//                     } else if (cell.column.Header === "Max. Budget") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {" "}
//                           {cell.value}{" "}
//                         </p>
//                       );
//                     } else if (cell.column.Header === "End Date") {
//                       data = (
//                         <p className="text-sm font-bold text-navy-700 dark:text-white">
//                           {cell.value}
//                         </p>
//                       );
//                     }
//                     return (
//                       <td
//                         {...cell.getCellProps()}
//                         key={index}
//                         className="pt-[14px] pb-[16px] sm:text-[14px]"
//                       >
//                         {data}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </Card>
//   </>
//   );
// };


import React, { useMemo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Modal from "react-modal";
import EditProject from './EditProject/EditProject';
import DeleteProject from './DeleteProject/DeleteProject';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function CheckTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const [deleteisOpen, setDeleteIsOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);


  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const opendeleteModal = () => setDeleteIsOpen(true);
  const closedeleteModal = () => setDeleteIsOpen(false);


  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    // console.log("Token in Frontend : ",jwtToken);

    const headers = {
      'Content-Type': 'application/json',
      "Authorization": `${jwtToken}`,
    };

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch("http://localhost:4000/allprojects", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // If 'data' is an array, set it directly
          // setTableData(data);
          setTableData(data.slice(-4));
        } else if (data && Array.isArray(data.projects)) {
          // If 'data' contains an array under a key like 'projects', use that
          // setTableData(data.projects);
          setTableData(data.projects.slice(-4));
        } else {
          console.error("Data format is not as expected:", data);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


  const openEditPopup = (project) => {
    setSelectedProject(project);
    openModal(); 
  };

  const openDeletePopup = (project) => {
    setSelectedProject(project);
    opendeleteModal(); 
  };


  // const closeEditModal = () => {
  //   setSelectedProject(null);
  //   isOpen(false);
  // };


  const columns = useMemo(() => [
    // Define your columns here
    {
      Header: "Edit",
      accessor: "editIcon",
      Cell: ({ row }) => (
        <Link
          to="/admin/default"
          className="text-sm font-bold text-navy-700 dark:text-white"
          onClick={() => openEditPopup(row.original)}
        >
          <i className="fa fa-edit"></i>
        </Link>
      ),
    },
    {
      Header: "Project Name",
      accessor: "projectTitle",
      Cell: ({ row }) => (
        <Link
          to={`/project/${(row.original._id)}`}
          className="text-sm font-bold text-navy-700 dark:text-white"
        >
          {row.original.projectTitle}
        </Link>
      ),
    },
    {
      Header: "Project Manager",
      accessor: "projectManager",
    },
    {
      Header: "Max. Budget",
      accessor: "maxBudget",
    },
    {
      Header: "End Date",
      accessor: "endDate",
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
          to="/admin/default"
          className="text-sm font-bold text-navy-700 dark:text-white"
          onClick={() => openDeletePopup(row.original)}
        >
          <i className="fa fa-trash"></i>
        </Link>
      ),
    },
  ], []);

  const tableInstance = useTable(
    {
      columns,
      data: tableData,
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
  } = tableInstance;

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Card extra="w-full h-full sm:overflow-auto px-6">
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          All Projects
        </div>
        {/* <CardMenu /> */}
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="w-full"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={column.id}
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
                      key={cell.column.id}
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

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Project Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
          <EditProject
            project={selectedProject}
          />
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={deleteisOpen}
        onRequestClose={closedeleteModal}
        contentLabel="Edit Project Modal"
        className="custom-modal"
        overlayClassName="custom-modal-overlay"
      >
        <div className="modal-content">
        <DeleteProject
            project={selectedProject}
            onClose={closedeleteModal}
          />
        </div>
      </Modal>
      </Card>
  );
}
