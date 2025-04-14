import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navlogo } from "../../assets";

const Navbar = ({ setNavMargin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [navMarginTop, setNavMarginTop] = useState("mt-5");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);

      setHideTopBar(currentScrollY > 50);
      // Change margin dynamically
      if (currentScrollY > 0) {
        setNavMarginTop("mt-0");
      } else {
        setNavMarginTop("mt-5");
      }

      // // Adjust the margin dynamically based on the navbar height
      // const navbarHeight = showNavbar ? (hideTopBar ? 60 : 90) : 0;
      // setNavMargin(navbarHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, hideTopBar, showNavbar, setNavMargin]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-white text-gray-200  flex justify-between items-center px-4 md:px-10 text-sm transition-transform duration-500 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        } fixed top-0 left-0 w-full`}
      >
        <div className="flex space-x-4 text-blue-700">
          <a href="mailto:B9Concept@gmail.com" className="hover:underline">
            B9Concept@gmail.com
          </a>
          <span className="hidden md:block mx-2">|</span>
          <a href="tel:+919970436943" className="hover:underline">
            +91 9970436943
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={` rounded-b-full bg-gradient-to-r from-[#1f6578] via-[#1f6575] to-[#1f6572] h-20 text-gray-100 shadow-md md:px-10 flex justify-between items-center transition-all duration-500 z-50 ${navMarginTop}`}
      >
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/home")}
        >
          <div className="p-2 my-6 rounded-full mt-5 flex items-center space-x-2">
            <img
              className="h-15 object-cover rounded-2xl shadow-md active:scale-95"
              src={navlogo}
              alt="b9concept"
            />
            <span className="font-extrabold text-3xl uppercase">
              B9 Concept
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden justify-center items-center lg:flex space-x-8 text-md font-semibold">
          {[
            "HOME",
            "ABOUT US",
            "PROCESS",
            "ACHIEVEMENT",
            "BLOG",
            "CONTACT US",
            "LOGIN",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() =>
                navigate(`/${item.toLowerCase().replace(/\s/g, "")}`)
              }
              className={`
                ${
                  item === "LOGIN"
                    ? "bg-white text-black  px-7  py-1 rounded-2xl"
                    : "hover:text-[#79b7c8]"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white-400 px-3 py-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-3/4 max-w-sm shadow-md  px-6 py-6 lg:hidden space-y-4 z-[110]"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-100"
            >
              <X size={28} />
            </button>
            {[
              "HOME",
              "ABOUT US",
              "PROCESS",
              "ACHIEVEMENT",
              "BLOG",
              "CONTACT US",
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(/\s/g, "")}`);
                  toggleMenu();
                }}
                className="block w-full text-left text-gray-100 font-semibold p-2 hover:bg-blue-600 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-105 w-3/3 max-w-sm shadow-md px-6 py-6 lg:hidden space-y-4 z-[110] bg-gradient-to-r from-[#1f6578] via-[#1f6575] to-[#1f6572]"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-100"
            >
              <X size={28} />
            </button>
            {[
              "HOME",
              "ABOUT US",
              "PROCESS",
              "ACHIEVEMENT",
              "BLOG",
              "CONTACT US",
              "LOGIN",
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  navigate(`/${item.toLowerCase().replace(/\s/g, "")}`);
                  toggleMenu();
                }}
                className="block w-full text-left text-gray-100 font-semibold p-2 hover:bg-blue-600 rounded transition duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
