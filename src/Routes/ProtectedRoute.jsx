// src/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roleRequired }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → redirect to login
  if (!token) {
    return <Navigate to="*" replace />;
  }

  // Logged in but wrong role → redirect to 404
  if (roleRequired && role !== roleRequired) {
    return <Navigate to="/404" replace />;
  }

  // Authorized
  return children;
};

export default ProtectedRoute;
