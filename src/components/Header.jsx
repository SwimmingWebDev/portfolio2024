import React from "react";
import { Link } from "react-router-dom";

//icons
import { RiHomeLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <RiHomeLine className="icon-home" />
      </Link>
      <nav className="main-nav">
        <div className="nav-items">
          {["Work", "About", "Inspirations", "Contact"].map((nav, index) => (
            <div className="nav-item transition" key={index}>
              {nav}
            </div>
          ))}
        </div>
        <SlMenu className="icon-menu" />
      </nav>
    </header>
  );
};

export default Header;
