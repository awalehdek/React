import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-24 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          {/*<!-- Title with Circular Font and Increased Size -->*/}
          <h1 className="text-5xl font-extrabold text-white sm:text-6xl md:text-7xl" style={{ fontFamily: "'Circular Std', sans-serif" }}>{title}</h1>
          <p className="my-6 text-2xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
