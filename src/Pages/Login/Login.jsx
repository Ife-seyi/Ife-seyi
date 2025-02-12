/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user data
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    const userName = localStorage.getItem("userName");

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", true);
      setUser(userName); // Update authentication state with user name
      navigate("/"); // Redirect to homepage after login
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded-md text-black/50 dark:text-white/50"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded-md text-black/50 dark:text-white/50"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
