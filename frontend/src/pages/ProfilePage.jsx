import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage (saved during login)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  animate-fade-in bg-linear-to-br from-blue-200 via-pink-200 to-yellow-200 p-6 flex justify-center">

      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-lg text-center">

        {/* Profile Avatar */}
        <img
          src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${user.name}`}
          alt="Avatar"
          className="w-32 h-32 mx-auto rounded-full mb-4 shadow-lg"
        />

        {/* Name */}
        <h1 className="text-3xl font-extrabold uppercase text-purple-600 mb-1">
          {user.name}
        </h1>

        {/* Email */}
        <p className="text-gray-700 hidden text-lg mb-6">{user.email}</p>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Stats (You can update when scores added) */}
        <div className="flex justify-between text-center mt-6">
          <div className="flex-1">
            <p className="text-2xl font-bold text-blue-600">0</p>
            <p className="text-sm text-gray-600">Quizzes Played</p>
          </div>

          <div className="flex-1">
            <p className="text-2xl font-bold text-green-600">0</p>
            <p className="text-sm text-gray-600">Correct Answers</p>
          </div>

          <div className="flex-1">
            <p className="text-2xl font-bold text-orange-600">0</p>
            <p className="text-sm text-gray-600">Categories Tried</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <a href="/categories">
            <button className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700">
              Play New Quiz 🎮
            </button>
          </a>

          <a href="/home">
            <button className="w-full py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700">
              Back to Home 🏠
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
