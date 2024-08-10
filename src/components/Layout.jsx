import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Contact from "./Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Contact />
    </>
  );
};

export default Layout;
