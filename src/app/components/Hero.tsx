import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black px-8 py-16 text-white">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <Image
          src="/image1.jpg" // Add your image path here
          alt="Profile"
          width={400}
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-tight animate-pulse">
          <span className="text-red-700 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Imad Ul Islam
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-semibold mb-4">
          Developer & UI/UX Designer
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
          I’m a passionate web developer and UI/UX designer with a strong focus on creating user-centered experiences. Do you want to make a website for your Business and grow your work. So you're on the right place.         </p>
        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
