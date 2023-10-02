import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl"; 
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Expense from "views/admin/default/components/Expense";
import { columnsDataCheck } from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";

import SignUpPage from "views/auth/SignUpPage";
import LoginPage from "views/auth/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/project/:projectName" 
      element={<Expense
                columnsData={columnsDataCheck}
                tableData={tableDataCheck} />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

