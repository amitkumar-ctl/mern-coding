import { useNavigate } from "react-router-dom";

const dummyQuestions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "HashMap"],
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["String", "Sliding Window"],
  },
  {
    id: 3,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    tags: ["Heap", "Linked List"],
  },
];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "text-green-500";
    case "Medium":
      return "text-yellow-500";
    case "Hard":
      return "text-red-500";
    default:
      return "";
  }
};

const PracticePage = () => {
  const navigate = useNavigate();

  const handleSolve = (id) => {
    navigate(`/solve/${id}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Practice Questions</h2>
      <div className="space-y-4">
        {dummyQuestions.map((question) => (
          <div
            key={question.id}
            className="bg-white shadow-md rounded p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {question.title}
              </h3>
              <p
                className={`text-sm ${getDifficultyColor(
                  question.difficulty
                )} font-semibold`}
              >
                {question.difficulty}
              </p>
              <div className="flex flex-wrap mt-1 gap-2">
                {question.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-200 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleSolve(question.id)}
              className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Solve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticePage;
