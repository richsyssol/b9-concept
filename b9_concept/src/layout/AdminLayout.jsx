import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
const AdminLayout = () => {
  return (
    <div className="admin-layout" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <AdminNavbar />
        <div className="flex items-center justify-around">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
