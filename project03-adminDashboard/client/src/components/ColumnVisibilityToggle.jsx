import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function ColumnVisibilityToggle({ allColumns }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
      >
        Toggle Columns
        <EllipsisVerticalIcon  width={20}/>
      </button>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {allColumns.map((column) => (
              <label
                key={column.id}
                className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              >
                <input
                  type="checkbox"
                  {...column.getToggleHiddenProps()}
                  className="mr-2 form-checkbox text-yellow-400 bg-gray-700 border-gray-600 rounded"
                />
                {column.Header}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ColumnVisibilityToggle;
