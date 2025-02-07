import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-8 bg-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-red-600">My Projects</h2>
        <p className="text-lg text-gray-400">
          Check out some of the projects I’ve been working on.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="group relative overflow-hidden bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          <Image
            src="/project1.jpg" // Replace with your image path
            alt="Project 1"
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white">Calculator</h3>
              <p className="text-sm text-gray-300 mt-2">A mini calculator built with Typescript and HTML/CSS.</p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative overflow-hidden bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          <Image
            src="/project2.jpg" // Replace with your image path
            alt="Project 2"
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white">ToDo List</h3>
              <p className="text-sm text-gray-300 mt-2">Small todo list web application in which you can organize your any work easily.</p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group relative overflow-hidden bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          <Image
            src="/project3.jpg" // Replace with your image path
            alt="Project 3"
            width={500}
            height={300}
            className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-60">
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white">Signup Form</h3>
              <p className="text-sm text-gray-300 mt-2">A simple UI Signup form built with HTML/CSS and Typescript</p>
              <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Projects;
