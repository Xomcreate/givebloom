import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    // Not logged in
    return <Navigate to="*" />;
  }

  if (role !== "admin") {
    // Logged in but not admin
    return <Navigate to="/NotFound" />;
  }

  return children;
};

export default AdminRoute;
