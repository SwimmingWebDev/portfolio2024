import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Contact />
      <div className="footer-message">
        <p>Thank you for visiting.</p>
        <div className="copyright">© HappyCodingMama 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
