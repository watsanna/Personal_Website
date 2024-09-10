import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-orange-600 w-[80%] top-0 fixed left-1/2 transform -translate-x-1/2 z-50 flex justify-evenly shadow-md rounded-b-2xl">
      <ul className="list-none flex justify-center items-center m-0 p-0">
        <li>
          <Link to="/" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            Home
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="/about" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            About Me
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="/tech" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            Technology Portfolio
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="/dance" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            Dance Journey
          </Link>
        </li>
        <li className="hidden md:block">
          <Link to="/contact" className="text-black font-bold px-6 py-3 hover:text-white flex items-center">
            Contact Me
          </Link>
        </li>
        
        <li className="relative md:hidden">
          <button
            className="text-white bg-orange-600 font-bold px-6 py-3 rounded hover:bg-orange-500"
            onClick={toggleDropdown}
          >
            Explore More
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-orange-400 mt-2 w-full rounded-lg shadow-lg z-50">
              <li>
                <Link to="/about" className="block px-4 py-2 text-center text-black hover:bg-orange-500" onClick={closeDropdown}>
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/tech" className="block px-4 py-2 text-center text-black hover:bg-orange-500" onClick={closeDropdown}>
                  Technology Portfolio
                </Link>
              </li>
              <li>
                <Link to="/dance" className="block px-4 py-2 text-center text-black hover:bg-orange-500" onClick={closeDropdown}>
                  Dance Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-4 py-2 text-center text-black hover:bg-orange-500" onClick={closeDropdown}>
                  Contact Me
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
