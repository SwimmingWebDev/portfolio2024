import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  return (
    <header className="main-header">
      <RiHomeLine />
      <nav className="main-nav">
        <div className="nav-items">
          {["Work", "About", "Inspirations", "Contact"].map((nav, index) => (
            <div className="nav-item transition" key={index}>
              {nav}
            </div>
          ))}
          <SlMenu className="icon-menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
