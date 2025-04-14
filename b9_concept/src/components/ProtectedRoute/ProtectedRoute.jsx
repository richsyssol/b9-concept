// ProtectedRoute.js
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const ProtectedRoute = ({ children, roles = [] }) => {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user has the required role
  if (roles.length > 0 && !roles.includes(user?.role)) {
    return <Navigate to="/" replace />; // Or redirect to a "not authorized" page
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
