import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 ">
      <div className="flex flex-col items-center flex-shrink-0 text-white mr-6">
        
      </div>
      <div className="flex w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className=" text-sm ">
          <a href="home" className=" block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Home
          </a>
          <a href="about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            About
          </a>

          <a href="skills" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Skills
          </a>

          <a href="samples" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Samples
          </a>


          <a href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;