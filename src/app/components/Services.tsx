import React from "react";

const Services: React.FC = () => {
  return (
    <section id="services" className="px-8 py-16 bg-background text-white">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {/* UI Design Service */}
        <div className="group p-6 bg-gray-800 rounded-lg transition-all transform hover:-translate-y-2 hover:bg-gray-700 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-white group-hover:text-red-500">
            UI Design
          </h3>
          <p className="mt-2 text-gray-400">
            Creating intuitive and visually appealing designs.
          </p>
          <button className="mt-4 text-red-500 group-hover:text-red-600 font-medium">
            Know More →
          </button>
        </div>

        {/* Product Design Service */}
        <div className="group p-6 bg-gray-800 rounded-lg transition-all transform hover:-translate-y-2 hover:bg-gray-700 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-white group-hover:text-red-500">
            Product Design
          </h3>
          <p className="mt-2 text-gray-400">
            Designing user-centric products for better engagement.
          </p>
          <button className="mt-4 text-red-500 group-hover:text-red-600 font-medium">
            Know More →
          </button>
        </div>

        {/* Branding Service */}
        <div className="group p-6 bg-gray-800 rounded-lg transition-all transform hover:-translate-y-2 hover:bg-gray-700 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-white group-hover:text-red-500">
            Branding
          </h3>
          <p className="mt-2 text-gray-400">
            Building a strong brand identity for your business.
          </p>
          <button className="mt-4 text-red-500 group-hover:text-red-600 font-medium">
            Know More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
