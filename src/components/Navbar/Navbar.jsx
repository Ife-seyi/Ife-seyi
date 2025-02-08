// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { FaCaretDown, FaCartShopping, FaUser, FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { useCart } from "../../useCart";

const Navbar = () => {
  const { cart } = useCart();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Check if user is logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setUserName(localStorage.getItem("userName") || "User");
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white fixed top-0 w-full z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-primary font-semibold text-2xl sm:text-3xl uppercase"
          >
            Tech Vibes
          </Link>

          {/* Navbar Links - Hidden on Mobile */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-500 hover:text-black dark:hover:text-white"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 dark:text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Menu - Slide in */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:hidden`}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-white text-2xl"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-start p-6 gap-6">
              <Link
                to="/"
                className="text-gray-500 hover:text-black dark:hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-500 hover:text-black dark:hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-gray-500 hover:text-black dark:hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative p-3">
            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className="flex items-center gap-2 p-3 text-gray-600 dark:text-white"
            >
              <FaUser className="text-xl" />
              <span>{isLoggedIn ? `Hi, ${userName}` : "Account"}</span>
              <FaCaretDown />
            </button>
            {isAccountOpen && (
              <div className="absolute right-0 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md p-2">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/account"
                      className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/orders"
                      className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                    >
                      Orders
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block p-2 w-full text-left hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block p-2 bg-primary text-white text-center rounded-md"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Dark Mode */}
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
