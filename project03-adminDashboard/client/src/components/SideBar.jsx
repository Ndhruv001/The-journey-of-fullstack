import {
  HomeIcon,
  UsersIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartPieIcon,
  UserIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-gray-300 p-6 flex flex-col fixed top-0 left-0">
      {/* Top Section */}
      <div className="flex items-center justify-center mb-12">
        <span className="text-xl font-bold text-center text-yellow-400">
          ECOMVISION
        </span>
      </div>

      {/* Dashboard Section */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-5 text-sm cursor-pointer py-2 px-3 rounded mb-6 ${isActive ? "bg-gray-400 text-yellow-400" : "hover:bg-gray-400 hover:text-yellow-400"}`
        }
      >
        <HomeIcon width={24} />
        <span className="text-lg">Dashboard</span>
      </NavLink>

      {/* Sections */}
      <div className="mt-6 w-full">
        {/* Client Section */}
        <div className="mb-8">
          <h3 className="text-md text-yellow-400 mb-4 uppercase">
            Client Facing
          </h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <UsersIcon width={20} />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customers"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <UserIcon width={20} />
                <span>Customers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <BanknotesIcon width={20} />
                <span>Transactions</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sales Section */}
        <div className="mb-8">
          <h3 className="text-sm text-yellow-400 uppercase mb-4">Sales</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <ChartPieIcon width={20} />
                <span>Overview</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/daily"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <CalendarDaysIcon width={20} />
                <span>Daily</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/monthly"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <CalendarIcon width={20} />
                <span>Monthly</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/breakdown"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <ArrowTrendingUpIcon width={20} />
                <span>Breakdown</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Management Section */}
        <div className="mb-8">
          <h3 className="text-sm text-yellow-400 uppercase mb-4">Management</h3>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <UserIcon width={20} />
                <span>Admin</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/performance"
                className={({ isActive }) =>
                  `flex items-center gap-3 text-sm cursor-pointer py-2 px-3 rounded ${
                    isActive
                      ? "bg-gray-400 text-yellow-400"
                      : "hover:bg-gray-400 hover:text-yellow-400"
                  }`
                }
              >
                <ArrowTrendingUpIcon width={20} />
                <span>Performance</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
