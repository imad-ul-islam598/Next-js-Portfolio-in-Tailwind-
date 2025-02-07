'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Lightning effect animation
    const lightning = document.querySelector('.lightning');
    if (lightning) {
      setInterval(() => {
        lightning.classList.add('flash');
        setTimeout(() => {
          lightning.classList.remove('flash');
        }, 1000);
      }, 5000);
    }
  }, []);

  return (
    <section
      id="about"
      className="relative h-full min-h-screen bg-gradient-to-br from-black via-[#1c0000] to-black text-white py-16 lg:py-24 overflow-hidden"
      >
      {/* Lightning Effect */}
      <div className="lightning absolute inset-0 z-0"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Profile Image with Effects */}
          <div className="lg:w-1/3 w-2/3 sm:w-1/2 mx-auto">
            <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
              <Image
                src="/image1.jpg" // Replace with your image path
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full shadow-2xl transform transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border-4 border-red-600 opacity-80 animate-pulse"></div>
            </div>
          </div>

          {/* About Me Text Content */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-shadow">
              About Me
            </h2>
            <p className="text-gray-300 text-md lg:text-lg leading-relaxed mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
              My name is IMAD UL ISLAM and I a'm a Web Developer. I have design many Websites with beautiful user interface with my 1 year experience in development career. 
              I work with modern frameworks like Next.js, React, and Tailwind CSS. Beyond code, I enjoy discovering new places and connecting with others.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="#contact"
              className="inline-block px-8 py-3 text-lg font-semibold text-white bg-red-600 rounded-full shadow-md hover:bg-red-700 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
