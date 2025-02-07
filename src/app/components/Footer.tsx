import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center gap-4 px-8 py-4 bg-gray-900 text-gray-400 text-sm">
      <p>&copy; 2024 Imad. All Rights Reserved.</p>
      <p>
        Made with <span className="text-red-600">&hearts;</span> by IMAD UL ISLAM
      </p>
    </footer>
  );
};

export default Footer;
