// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <div className="text-2xl font-bold text-blue-600">MernCoding</div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
          🚀 Master Coding with Practice and Quizzes
        </h1>
        <p className="text-gray-600 mb-8 max-w-xl">
          Sharpen your skills by solving practice questions and testing yourself
          with fun quizzes.
        </p>
        <Link
          to="/signup"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Get Started
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} PracticePlatform. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
