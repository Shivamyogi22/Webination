// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-blue-900 p-4">
      <ul className="flex space-x-4 justify-evenly">
        <li>
          <Link
            to="/count-timer"
            className={`text-white ${
              location.pathname === '/count-timer'
                ? 'bg-blue-700'
                : 'hover:bg-blue-700'
            } p-4 rounded-xl font-semibold hover:text-gray-200`}
          >
            Count Timer
          </Link>
        </li>
        <li>
          <Link
            to="/search-user"
            className={`text-white ${
              location.pathname === '/search-user'
                ? 'bg-blue-700'
                : 'hover:bg-blue-700'
            } p-4 rounded-xl font-semibold hover:text-gray-200`}
          >
            Search User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
