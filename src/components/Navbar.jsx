import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          {["Work", "About", "Contact"].map((nav) => (
            <div>{nav}</div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
