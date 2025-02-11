import React, { useState } from "react";
import { useAuth } from "../Components/AuthContext"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = useAuth(); // ✅ Check if auth is not undefined
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!auth) {
    console.error("useAuth is undefined! Ensure AuthProvider is wrapping App.");
    return <p>Error: Authentication is not available.</p>;
  }

  const { login } = auth;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      if (response?.success) {
        navigate("/");
      } else {
        setError(response?.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
         Sign In
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-xl shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 text-gray-800 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
