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
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

export default function CheckTable() {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/allprojects")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTableData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    // Retrieve the JWT token from local storage
    const jwtToken = localStorage.getItem("jwtToken");
    console.log("Token in Frontend : ",jwtToken);
  
    // Define the headers object with the Authorization header
    const headers = {
      'Content-Type': 'application/json',
      "Authorization": `${jwtToken}`, 
    };
  
    // Define the request options, including headers
    const requestOptions = {
      method: "GET", 
      headers: headers,
    };
  
    fetch("http://localhost:4000/allprojects", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // If 'data' is an array, set it directly
          setTableData(data);
        } else if (data && Array.isArray(data.projects)) {
          // If 'data' contains an array under a key like 'projects', use that
          setTableData(data.projects);
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
  

  const columns = useMemo(() => [
    // Define your columns here
    {
      Header: "Project Name",
      accessor: "projectTitle", // Replace with the actual field name from your data
      Cell: ({ row }) => (
        <Link
          to={`/project/${encodeURIComponent(row.original.id)}`}
          className="text-sm font-bold text-navy-700 dark:text-white"
        >
          {row.original.projectTitle}
        </Link>
      ),
    },
    {
      Header: "Project Manager",
      accessor: "projectManager", // Replace with the actual field name from your data
    },
    {
      Header: "Max. Budget",
      accessor: "maxBudget", // Replace with the actual field name from your data
    },
    {
      Header: "End Date",
      accessor: "endDate", // Replace with the actual field name from your data
      Cell: ({ value }) => {
        const date = new Date(value);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return formattedDate;
      },
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
    </Card>
  );
}
