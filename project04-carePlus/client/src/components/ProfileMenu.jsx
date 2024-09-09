import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProfileImage from "@/assets/profile-image.jpeg";
import {
  ArrowRightEndOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

function ProfileMenu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div ref={dropdownRef} className="pt-1.5">
      <button
        onClick={toggleDropdown}
        className="flex items-center focus:outline-none"
      >
        <img
          src={ProfileImage}
          alt=""
          height={30}
          width={30}
          className="rounded-full border-gray-500 hover:border-2"
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-md shadow-lg py-2 z-50">
          <NavLink
            to="/patient/profile"
            className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-800 dark:text-white font-medium"
          >
            <UserIcon className="h-5 w-5 mr-2 text-blue-600 dark:text-white" />
            View Profile
          </NavLink>
          <button
            className="flex items-center w-full text-left px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-gray-900 dark:hover:bg-gray-800 font-medium rounded-b-md"
            onClick={() => {
              console.log("Logged out");
            }}
          >
            <ArrowRightEndOnRectangleIcon className="h-5 w-5 mr-2 text-red-500" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;
