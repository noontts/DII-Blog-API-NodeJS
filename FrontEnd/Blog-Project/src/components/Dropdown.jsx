import React, { useState } from 'react';

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-white dark:bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Categories
      </button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white dark:bg-gray-700 divide-y divide-gray-100">
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sports
              </a>
            </li>
            {/* Add more list items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;