import React from 'react';
import logo from '../assets/image/job_logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-b border-pink-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/*<!-- Logo Section with Circular Font and Padding -->*/}
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img className="h-12 w-12 rounded-full" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-3xl font-extrabold ml-2 tracking-wider" style={{ fontFamily: "'Circular Std', sans-serif" }}>Jobs</span>
            </a>
          </div>
          <div className="md:ml-auto">
            <div className="flex space-x-4">
              {/*<!-- Links with New Shining Color Effect and Circular Padding -->*/}
              <a href="/index.html" className="text-white bg-black hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-full px-5 py-3 text-lg">Home</a>
              <a href="/jobs.html" className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-full px-5 py-3 text-lg">Jobs</a>
              <a href="/add-job.html" className="text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white rounded-full px-5 py-3 text-lg">Add Job</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
