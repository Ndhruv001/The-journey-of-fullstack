import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import User from "../assets/profile.jpeg";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <img
        src={User}
        alt="User Profile"
        className="h-12 w-12 rounded-full object-cover mr-3"
      />
      
      <div className="relative  bottom-0">
        <h1 className="font-bold">Jane Doe</h1>
        <button className="focus:outline-none" onClick={toggleDropdown}>
          <ChevronDownIcon width={20} />
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-blue-100 border border-gray-400 rounded-md shadow-lg">
            <div className="py-2 px-4 text-gray-700">
              <p>
                <strong>Name: </strong> Jane Doe
              </p>
              <p>
                <strong>Age: </strong> 28
              </p>
              <p>
                <strong>Profession: </strong> Software Developer
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
