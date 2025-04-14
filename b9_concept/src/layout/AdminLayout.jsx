import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore"; // Adjust path as needed

// Components
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";

// Admin sidebar menu items (customize as needed)
const adminMenuItems = [
  { path: "/admin/dashboard", label: "Dashboard", icon: "📊" },
  { path: "/admin/manageTasks", label: "Manage Tasks", icon: "✅" },
  { path: "/admin/manageEmployee", label: "Employees", icon: "👥" },
  { path: "/admin/manageClients", label: "Clients", icon: "👔" },
  { path: "/admin/listing", label: "Appointments", icon: "📅" },
];

function AdminLayout() {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  // Redirect non-admin users trying to access admin routes
  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Hide sidebar/navbar on admin login/signup pages
  const isAdminAuthPage =
    location.pathname === "/adminlogin" || location.pathname === "/adminsignup";

  return (
    <>
      {!isAdminAuthPage && <AdminNavbar />}

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar (hidden on auth pages) */}
          {!isAdminAuthPage && (
            <div className="col-md-2 bg-dark text-white min-vh-100 p-3">
              <Sidebar menuItems={adminMenuItems} />
            </div>
          )}

          {/* Main Content */}
          <div
            className={isAdminAuthPage ? "col-md-12 p-4" : "col-md-10 p-4"}
            style={{ marginLeft: isAdminAuthPage ? "0" : "auto" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLayout;
