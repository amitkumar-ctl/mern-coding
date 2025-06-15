import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = ({ landingPage }) => {
  const location = useLocation();
  const url = location.pathname.includes("/dashboard")
    ? "dashboard"
    : location.pathname.split("/")[1];
  if (url === "dashboard") {
    return (
      <>
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
          <Link to={"/"} className="text-2xl font-bold text-blue-600">
            MernCoding
          </Link>
          <div className="space-x-4">Welcome User!</div>
        </nav>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <Link to={"/"} className="text-2xl font-bold text-blue-600">
          MernCoding
        </Link>
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
      </nav>

      {/* Main content will be injected here */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
