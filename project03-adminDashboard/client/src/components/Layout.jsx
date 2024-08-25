import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full p-6 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0 w-60" : "-translate-x-full w-60"
        }`}
      >
        <SideBar />
      </div>

      <div
        className={`flex-1 p-4 transition-all duration-300 ${
          isSidebarOpen ? "ml-60" : "ml-0"
        }`}
      >
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="m-5 h-auto   text-gray-200 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
