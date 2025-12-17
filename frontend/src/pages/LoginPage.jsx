import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("https://quizotron-the-web-app-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.message);

    if (data.token) {
      // Save token + user details
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    }
  };

  return (
    <div className="min-h-screen animate-fade-in flex items-center justify-center bg-linear-to-br from-fuchsia-300 to-indigo-400 px-4 py-6">

      <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8">

        {/* App Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://img.icons8.com/color/96/user.png"
            alt="login"
            className="w-20 h-20 drop-shadow-md"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 bg-gray-100 focus:ring-2 focus:ring-purple-400 outline-none rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 bg-gray-100 focus:ring-2 focus:ring-purple-400 outline-none rounded-xl mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl text-lg font-semibold transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center mt-5 text-gray-700 text-sm">
          Not registered?
          <Link to="/signup" className="text-purple-700 font-semibold ml-1">
            Signup
          </Link>
        </p>

      </div>
    </div>

  );
};

export default LoginPage;
