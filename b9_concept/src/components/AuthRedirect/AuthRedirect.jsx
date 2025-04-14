import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";
const AuthRedirect = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) return children;

  // Redirect based on user role
  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Navigate to="/appointment" replace />;
};
  
export default AuthRedirect;
