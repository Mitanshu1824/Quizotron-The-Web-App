import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="min-h-screen animate-fade-in flex flex-col items-center justify-center 
    bg-linear-to-br from-cyan-400 via-fuchsia-300 to-pink-200 
    relative overflow-hidden px-6">

      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-white/30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/20 rounded-full blur-xl animate-bounce" />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/20 rounded-full blur-xl animate-ping" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <img
          className="w-56 mb-8 rounded-3xl shadow-xl animate-bounce"
          src="/logo.png"
          alt="Quizotron Logo"
        />

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-center text-purple-900 mb-4 drop-shadow-lg">
          Welcome to Quizotron 🎉
        </h1>

        {/* Subheading */}
        <p className="text-lg text-center text-gray-700 mb-10 max-w-md">
          Fun quizzes for children and everyone!  
          Start your learning adventure now 🚀
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-lg 
              hover:scale-110 hover:bg-purple-700 transition-all font-semibold">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-8 py-3 bg-pink-500 text-white rounded-xl shadow-lg 
              hover:scale-110 hover:bg-pink-600 transition-all font-semibold">
              Signup
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WelcomePage;
