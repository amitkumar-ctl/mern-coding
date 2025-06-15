// src/pages/QuizPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const quizzes = [
  { id: 1, title: "JavaScript Basics", questions: 10 },
  { id: 2, title: "React Fundamentals", questions: 12 },
  { id: 3, title: "Node.js Concepts", questions: 8 },
  { id: 4, title: "CSS", questions: 15 },
  { id: 5, title: "HTML Essentials", questions: 5 },
  { id: 6, title: "MongoDB", questions: 20 },
  { id: 7, title: "Express", questions: 18 },
];

const QuizPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">
        🧠 Available Quizzes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">
              {quiz.title}
            </h2>
            <p className="text-gray-600">{quiz.questions} Questions</p>
            <Link to="/quiz/attempt">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer">
                Start Quiz
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
