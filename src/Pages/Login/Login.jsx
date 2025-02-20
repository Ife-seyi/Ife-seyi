/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.defaults.baseURL("https://tv-backend-one.vercel.app/", {
        email,
        password,
      });

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);
      setUser(response.data.userName); // Update user state
      navigate("/"); // Redirect to homepage
    } catch (error) {
      setMessage(error.response?.data?.error || "Invalid credentials.");
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
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 rounded-md"
          >
            Sign In
          </button>
        </form>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
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
