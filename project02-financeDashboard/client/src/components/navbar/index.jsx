import { BanknotesIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white border-white border-b-2 mb-3 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="w-10 h-10 bg-gray-800 rounded-full">
          <BanknotesIcon />
        </NavLink>{" "}
        <span className="text-2xl font-semibold">Finanseer</span>
      </div>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `hover:text-gray-400 ${isActive ? "text-gray-400" : ""} font-medium text-lg`
        }
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
