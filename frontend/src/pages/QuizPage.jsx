import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [animateCorrect, setAnimateCorrect] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/quiz/${category}`)
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, [category]);

  if (!questions.length) return <p>Loading...</p>;

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (option, index) => {
  setSelectedOption(option);

  const correct = index === currentQuestion.correctIndex;
  setIsCorrect(correct);

  if (correct) {
    setScore(prev => prev + 1);
    setAnimateCorrect(true);

    setTimeout(() => setAnimateCorrect(false), 600);
  }

  // ⭐ Redirect to results after last question
  if (currentIndex === questions.length - 1) {
    setTimeout(() => {
      navigate("/results", {
        state: {
          score: correct ? score + 1 : score,
          total: questions.length,
          category: category
        }
      });
    }, 1200);
  }
};


  return (
    <div className="min-h-screen bg-linear-to-br from-pink-200 via-yellow-200 to-blue-200 p-6 flex flex-col items-center">

      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          {category.charAt(0).toUpperCase() + category.slice(1)} Quiz 🎉
        </h1>

        <div
          className={`w-full max-w-xl bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl transition 
          ${animateCorrect ? "correct-bounce" : ""}`}
        >
          {/* QUESTION */}
          <p className="text-xl font-semibold mb-4">
            {currentQuestion.question}
          </p>

          {/* OPTIONS */}
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt, i)}
              className={`w-full p-3 mt-3 rounded-xl font-semibold transition
                ${selectedOption === opt
                  ? isCorrect
                    ? "bg-green-500 text-white shadow-lg scale-105"
                    : "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-linear-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
                }`}
            >
              {opt}
            </button>
          ))}

          {/* NEXT BUTTON */}
          {selectedOption && currentIndex < questions.length - 1 && (
            <button
              onClick={() => {
                setSelectedOption(null);
                setIsCorrect(null);
                setCurrentIndex(prev => prev + 1);
              }}
              className="mt-6 w-full py-3 bg-linear-to-r from-purple-500 to-pink-500 
              text-white rounded-full text-lg font-bold hover:shadow-xl hover:scale-105 transition"
            >
              Next →
            </button>
          )}

        </div>
      </div>

    </div>
  );
};

export default QuizPage;
