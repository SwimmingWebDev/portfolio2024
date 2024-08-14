import React, { useContext } from "react";
import { Link } from "react-router-dom";

//icons
import { RiHomeLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { userContext } from "../context/userProvider.jsx";

const Header = () => {
  const { currentUser } = useContext(userContext);

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
          {currentUser?.id && (
            <Link to="/logout">
              <RiLogoutCircleRLine className="nav-item transition" />
            </Link>
          )}
        </div>
        <SlMenu className="icon-menu" />
      </nav>
    </header>
  );
};

export default Header;
