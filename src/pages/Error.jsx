import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6"
    >
      <div className="max-w-lg w-full">
        <h2 className="text-9xl font-extrabold text-red-600 drop-shadow mb-6">404</h2>
        <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Sorry! Page not found
        </h4>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Oops! It seems like the page you're trying to access doesn't exist. <br />
          If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <NavLink
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition transform duration-200"
          >
            Return Home
          </NavLink>

          <NavLink
            to="/contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 hover:scale-105 transition transform duration-200"
          >
            Report Problem
          </NavLink>
        </div>
      </div>
    </div>
  );
};
