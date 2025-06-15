import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Here, we'll later validate the email and password with an API call or authentication
    console.log("Logged in with:", email, password);

    // Navigate to Dashboard on successful login
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
          🚀 Welcome Back! Log in to Continue
        </h1>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-left text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 cursor-pointer transition duration-200 ease-in-out"
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} PracticePlatform. All rights reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
