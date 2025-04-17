import React, { useEffect } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Aboutus from "./pages/Aboutus/Aboutus";
import BlogDetails from "./pages/Blog/BlogDetails";
import Contactus from "./pages/Contactus/Contactus";
import Achivement from "./pages/Achivement/Achivement";
import Process from "./pages/Process/Process";
import Home from "./pages/Homepage/Home";
import Appointment from "./pages/Homepage/Appointment";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup"; // Ensure this path is correct

import useAuthStore from "./store/authStore";
import NotFound from "./pages/ErrorPages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect/AuthRedirect";
import ManageTasks from "./pages/Adminlogin/ManageTasks";
import ManageEmployee from "./pages/Adminlogin/ManageEmployee";
import ManageClients from "./pages/Adminlogin/ManageClients";
import Listing from "./pages/DashboardPages/Listing";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import AppointmentEdit from "./pages/Appointment/AppointmentEdit";
import AppointmentDelete from "./pages/Appointment/AppointmentDelete";
import BlogPage from "./pages/Blog/BlogPage";

function App() {
  console.log("first line read");
  const { user, checkAuth, loading } = useAuthStore();
  console.log(user);
  useEffect(() => {
    checkAuth(); // Check authentication on mount
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
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
          {/* <Route path="blog" element={<BlogPage />} /> */}
          {/* <Route path="blog/:slug" element={<BlogDetails />} /> */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="achievement" element={<Achivement />} />
          <Route path="process" element={<Process />} />
          <Route path="contactus" element={<Contactus />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="appointment"
          element={
            <ProtectedRoute>
              <Appointment />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />

        {/* admin routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="manageTask" element={<ManageTasks />} />
          <Route path="manageemployee" element={<ManageEmployee />} />
          <Route path="ManageClients" element={<ManageClients />} />
          <Route path="listing" element={<Listing />} />
          <Route path="delete/:id" element={<AppointmentDelete />} />
          <Route path="appointment/edit/:id" element={<AppointmentEdit />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
