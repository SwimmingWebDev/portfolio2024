import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  return (
    <header className="main-header">
      <RiHomeLine />
      <nav className="main-nav">
        <div className="nav-items">
          {["Work", "About", "Contact"].map((nav) => (
            <div className="nav-item transition">{nav}</div>
          ))}
          <SlMenu className="icon-menu" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
