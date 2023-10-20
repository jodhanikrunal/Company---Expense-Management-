import MiniCalendar from "components/calendar/MiniCalendar";
// import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
// import TotalSpent from "views/admin/default/components/TotalSpent";
// import PieChartCard from "views/admin/default/components/PieChartCard";
import CreateNewProject from "./components/AddProject/Addproject";
// import { IoMdHome } from "react-icons/io";
// import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";

import { Link, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import Modal from 'react-modal';
// import Expense from './components/AllExpense/Expense';
import './index.css';

import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
// import ComplexTable from "views/admin/default/components/ComplexTable";
// import DailyTraffic from "views/admin/default/components/DailyTraffic";
// import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
// import tableDataComplex from "./variables/tableDataComplex.json";

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        {/* <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        /> */}
        {/* <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        /> */}
        {/* <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        /> */}
        {/* <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Add New Project"}
            // onClick={handleWidgetClick}
            // subtitle={"145"}
        /> */}
        <Link to="/admin/default" onClick={openModal}>
          <Widget
            icon={<MdBarChart className="h-7 w-7" />}
            title={"Add New Project"}
          />
        </Link>

        {/* <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>
          <CreateNewProject/>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal> */}

        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
        >
          <div className="modal-content">
            <CreateNewProject className="create-project" />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </Modal>


        {/* <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"All Projects"}
        /> */}
        {/* <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        /> */}
      </div>

      {/* Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div> */}

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-3">
        {/* Check Table */}
        <div className="col-span-2">
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          {/* <DailyTraffic /> */}
          {/* <PieChartCard /> */}
          <MiniCalendar />
        </div>

        {/* Complex Table , Task & Calendar */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}

        {/* Task chart & Calendar */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
           <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
