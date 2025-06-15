// src/pages/QuizAttemptPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sampleQuiz = [
  {
    question: "What does `const` mean in JavaScript?",
    options: [
      "Mutable variable",
      "Block-scoped constant",
      "Function",
      "None of the above",
    ],
    answer: 1,
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: 1,
  },
  {
    question: "Which of the following is a backend framework?",
    options: ["React", "Vue", "Angular", "Express"],
    answer: 3,
  },
];

const QuizAttemptPage = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for quiz
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    if (selected === sampleQuiz[currentQ].answer) setScore(score + 1);
    setSelected(null);
    if (currentQ + 1 < sampleQuiz.length) {
      setCurrentQ(currentQ + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    navigate("/quiz/result", {
      state: {
        score,
        total: sampleQuiz.length,
      },
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700">🧠 Quiz Attempt</h2>
        <p className="text-red-600 font-semibold">Time Left: {timeLeft}s</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">
          Q{currentQ + 1}: {sampleQuiz[currentQ].question}
        </h3>
        <div className="space-y-3">
          {sampleQuiz[currentQ].options.map((opt, i) => (
            <label
              key={i}
              className={`block p-3 border rounded cursor-pointer ${
                selected === i
                  ? "bg-blue-100 border-blue-600"
                  : "hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="option"
                className="mr-2"
                value={i}
                checked={selected === i}
                onChange={() => setSelected(i)}
              />
              {opt}
            </label>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          {currentQ + 1 < sampleQuiz.length ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default QuizAttemptPage;
