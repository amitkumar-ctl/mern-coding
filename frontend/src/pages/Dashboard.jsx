import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav className="flex flex-col gap-6">
          <button className="text-left text-gray-700 hover:text-blue-600 cursor-pointer">
            Account Settings
          </button>
          <button className="text-left text-gray-700 hover:text-blue-600 cursor-pointer">
            Support
          </button>
          <button className="text-left text-red-500 hover:text-red-700 cursor-pointer">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Section - Streak and Points */}
        <div className="flex flex-col space-y-4 w-full mb-10">
          <div className="bg-black p-6 rounded-lg shadow-md text-white flex-1">
            <h3 className="text-xl font-semibold mb-2">🔥 Streak</h3>
            <p className="text-3xl font-bold text-blue-600">5 Days</p>
          </div>
        </div>

        {/* Bottom Section - Quiz and Practice Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Link
            to="/quizzes"
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded shadow transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-lg font-bold text-blue-700">🧠 Quiz</h2>
            <p className="text-gray-600">
              Test your knowledge with fun coding quizzes.
            </p>
          </Link>

          <Link
            to="/questions"
            className="bg-green-100 hover:bg-green-200 p-6 rounded shadow transition-all duration-300 cursor-pointer"
          >
            <h2 className="text-lg font-bold text-green-700">
              💻 Practice Questions
            </h2>
            <p className="text-gray-600">
              Sharpen your skills with coding practice problems.
            </p>
          </Link>
        </div>
      </main>

      {/* Right Sidebar - Leaderboard */}
      <aside className="w-72 bg-white shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-8">Leaderboard</h2>
        <ul className="flex flex-col gap-4">
          <li className="flex justify-between">
            <span className="font-medium">Alice</span>
            <span>500 pts</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Bob</span>
            <span>450 pts</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Charlie</span>
            <span>400 pts</span>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Dashboard;
