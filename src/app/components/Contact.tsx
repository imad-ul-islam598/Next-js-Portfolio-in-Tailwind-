"use client";

import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-black bg-opacity-60 text-white py-16 px-6"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-700 mb-4">Get in Touch</h2>
          <p className="text-gray-400">
            Feel free to reach out anytime. I'm always open to discussing new
            projects, creative ideas, or opportunities to be part of your
            vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-700 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-300">+123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-700 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-300">contact@yourmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-700 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p className="text-gray-300">
                  123 Your Street, Your City, Country
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex space-x-3">
            <Link
              href="/facebook"
              className="p-3 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-300 shadow-lg"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/twitter"
              className="p-3 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-300 shadow-lg"
            >
              <FaTwitter />
            </Link>
            <Link
              href="/instagram"
              className="p-3 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-300 shadow-lg"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/linkedin"
              className="p-3 bg-red-700 rounded-full text-white hover:bg-red-600 transition duration-300 shadow-lg"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-red-700 mb-6 text-center">
            Send Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-red-700 rounded-md font-semibold text-white hover:bg-red-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
