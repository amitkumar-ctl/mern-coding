// src/pages/QuizResultPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const QuizResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      {/* Confetti Animation */}
      <Confetti width={width} height={height} />

      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          🎉 Quiz Completed!
        </h1>
        <p className="text-lg text-gray-700 mb-2">
          You scored <span className="font-bold text-green-600">{score}</span>{" "}
          out of <span className="font-bold text-gray-800">{total}</span>
        </p>

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${(score / total) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => navigate("/quiz/attempt")}
            className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 cursor-pointer"
          >
            🔁 Try Again
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          >
            🏠 Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResultPage;
