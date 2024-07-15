import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;