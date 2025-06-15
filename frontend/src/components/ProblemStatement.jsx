import React from "react";
import { FileText } from "lucide-react";

const ProblemStatement = ({ questionData }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-600";
      case "medium":
      case "intermediate":
        return "bg-orange-600";
      case "hard":
        return "bg-red-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="p-4 border-b border-gray-700 flex-shrink-0">
      <div className="flex items-center gap-2 mb-4">
        <FileText size={18} className="text-blue-400" />
        <h2 className="font-semibold text-lg">Problem Statement</h2>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h3 className="font-medium text-yellow-400 text-base mb-2">
            {questionData.title}
          </h3>
          <span
            className={`text-xs px-3 py-1 rounded-full text-white font-medium ${getDifficultyColor(
              questionData.difficulty
            )}`}
          >
            {questionData.difficulty}
          </span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {questionData.description}
        </p>

        <div>
          <h4 className="text-sm font-medium text-green-400 mb-2">
            Requirements:
          </h4>
          <ul className="text-sm text-gray-300 space-y-2">
            {questionData.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-400 mt-1 text-xs">●</span>
                <span className="flex-1">{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
