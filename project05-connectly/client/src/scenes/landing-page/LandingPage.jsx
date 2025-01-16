import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="w-screen h-screen flex">
      {/* Left Section */}
      <div className="w-3/5 bg-blue-950 text-violet-700 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Connectly</h1>
        <p className="text-lg opacity-80">A chat app to stay connected</p>
      </div>

      {/* Right Section */}
      <div className="w-2/5 bg-black flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-semibold text-white mb-6">
            Get Started
          </h1>
          <div className="flex justify-between space-x-4">
            <NavLink
              to="/login"
              className="w-28 h-10 flex items-center justify-center rounded-md bg-blue-800 text-white hover:bg-blue-700 transition-all"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign-up"
              className="w-28 h-10 flex items-center justify-center rounded-md bg-blue-800 text-white hover:bg-blue-700 transition-all"
            >
              Sign-up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
