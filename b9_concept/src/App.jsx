import React, { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Aboutus from "./pages/Aboutus/Aboutus";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contactus from "./pages/Contactus/Contactus";
import Achivement from "./pages/Achivement/Achivement";
import Process from "./pages/Process/Process";
import Home from "./pages/Homepage/Home";
import Appointment from "./pages/Homepage/Appointment";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"; // Ensure this path is correct
import Dashboard from "./pages/Dashboard/Dashboard";
import Adminlogin from "./pages/Adminlogin/Adminlogin";
import useAuthStore from "./store/authStore";
import NotFound from "./pages/ErrorPages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect/AuthRedirect";
import ManageTasks from "./pages/Adminlogin/ManageTasks";
import ManageEmployee from "./pages/Adminlogin/ManageEmployee";
import ManageClients from "./pages/Adminlogin/ManageClients";
import Listing from "./pages/DashboardPages/Listing";
import Adminsignup from "./pages/Adminsignup/Adminsignup";
import AdminLayout from "./layout/AdminLayout";

function App() {
  console.log("first line read");
  const { user, checkAuth } = useAuthStore();
  console.log(user);
  useEffect(() => {
    checkAuth(); // Check authentication on mount
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="login"
            element={
              <AuthRedirect>
                <Login />
              </AuthRedirect>
            }
          />
          <Route
            path="signup"
            element={
              <AuthRedirect>
                <Signup />
              </AuthRedirect>
            }
          />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="achievement" element={<Achivement />} />
          <Route path="process" element={<Process />} />
          <Route path="contactus" element={<Contactus />} />
          <Route
            path="appointment"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="manageTask" element={<ManageTasks />} />
          <Route path="manageemployee" element={<ManageEmployee />} />
          <Route path="ManageClients" element={<ManageClients />} />
          <Route path="listing" element={<Listing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
