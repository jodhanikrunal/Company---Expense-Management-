import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl"; 
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { ToastContainer } from "react-toastify";
import Expense from "views/admin/default/components/AllExpense/Expense";
import SignUpPage from "views/auth/SignUpPage";
import LoginPage from "views/auth/LoginPage";
import HomePage from "layouts/admin/HomePage";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/project/:id" 
        element={<Expense/>}/>
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
    </Routes>
      <ToastContainer />
    </>
  );
};

