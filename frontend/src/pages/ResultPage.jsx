import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const ResultPage = () => {
  const { state } = useLocation();
  const { score, total, category } = state || {};

  // Save score to DB
  useEffect(() => {
    if (score !== undefined) {
      const user = JSON.parse(localStorage.getItem("user"));

      fetch("https://quizotron-the-web-app-backend.onrender.com/api/scores/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user._id,
          category,
          score,
          total
        })
      });
    }
  }, [score, total, category]);

  return (
    <div className="min-h-screen animate-fade-in bg-linear-to-br from-pink-200 via-yellow-200 to-blue-200 flex flex-col items-center justify-center p-6">

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-lg w-full text-center">

        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          🎉 Quiz Completed!
        </h1>

        <p className="text-2xl font-semibold text-gray-800">
          Category: <span className="text-purple-600 capitalize">{category}</span>
        </p>

        <p className="mt-4 text-3xl font-bold text-blue-600">
          Score: {score} / {total}
        </p>

        <div className="mt-8 flex flex-col gap-4">

          <Link to={`/quiz/${category}`}>
            <button
              className="w-full py-3 bg-purple-600 text-white rounded-xl text-lg font-semibold hover:scale-110 transition-all"
            >
              Play Again 🔄
            </button>
          </Link>

          <Link to="/categories">
            <button className="w-full py-3 bg-green-600 text-white rounded-xl text-lg font-semibold hover:bg-green-700">
              🏠 Back to Categories
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ResultPage;
