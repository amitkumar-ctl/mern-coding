import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import QuizPage from "./components/QuizPage";
import PracticePage from "./components/PracticePage";
import QuizAttemptPage from "./pages/QuizAttemptPage";
import QuizResultPage from "./pages/QuizResultPage";
import SolveQuestionPage from "./pages/SolveQuestionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/quizzes" element={<QuizPage />} />
        <Route path="/questions" element={<PracticePage />} />
        <Route path="/quiz/attempt" element={<QuizAttemptPage />} />
        <Route path="/quiz/result" element={<QuizResultPage />} />
        <Route path="/solve/:id" element={<SolveQuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
