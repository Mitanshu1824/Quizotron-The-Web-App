import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postRequest } from "../utils/api";
import { useNavigate } from "react-router-dom";


const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });

  const data = await res.json();
  alert(data.message);

  if (data.message === "Signup successful") {
    navigate("/login"); // redirect to login page
  }
};

  return (
   <div className="min-h-screen animate-fade-in flex items-center justify-center bg-linear-to-br from-fuchsia-300 to-indigo-400 px-4 py-6">

  <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8">

    {/* Signup Logo */}
    <div className="flex justify-center mb-6">
      <img 
        src="https://img.icons8.com/color/96/add-user-male.png" 
        alt="signup" 
        className="w-20 h-20 drop-shadow-md"
      />
    </div>

    <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
      Create Account
    </h2>

    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-3 bg-gray-100 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    {/* Email */}
    <input
      type="email"
      placeholder="Email"
      className="w-full p-3 bg-gray-100 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    {/* Password */}
    <input
      type="password"
      placeholder="Password"
      className="w-full p-3 bg-gray-100 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    {/* Confirm Password */}
    <input
      type="password"
      placeholder="Confirm Password"
      className="w-full p-3 bg-gray-100 rounded-xl mb-4 focus:ring-2 focus:ring-purple-400 outline-none"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />

    {/* Signup Button */}
    <button
      onClick={handleSignup}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold text-lg transition"
    >
      Signup
    </button>

    {/* Login Link */}
    <p className="text-center mt-5 text-gray-700 text-sm">
      Already have an account?
      <Link to="/login" className="text-purple-700 font-semibold ml-1">
        Login
      </Link>
    </p>

  </div>
</div>

  );
};

export default SignupPage;
