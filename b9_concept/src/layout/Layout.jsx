// import React from "react";
// import { Outlet, useLocation, useSearchParams } from "react-router-dom";

// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import Contentwrapper from "../components/Contentwrapper/Contentwrapper";
// function Layout() {
//   const location = useLocation();
//   const [searchParams] = useSearchParams();

//   const isHomePageLogin =
//     location.pathname === "/" ||
//     location.pathname === "/Login" ||
//     location.pathname === "/Signup";

//   return (
//     <>
//       <Navbar />

//       <Outlet />

//       <Footer />
//     </>
//   );
// }
// export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
// Layout.js
const hideNavbarPaths = [
  "/login",
  "/signup",
  "/appointment",
  "/adminlogin",
  "/adminsignup",
];

function Layout() {
  const location = useLocation();
  const shouldHideNavbar = hideNavbarPaths.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
      {!shouldHideNavbar && <Footer />}
    </>
  );
}
export default Layout;
