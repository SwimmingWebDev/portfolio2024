import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

// Lenis
import { ReactLenis, useLenis } from "lenis/react";

const Layout = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <ReactLenis root>
        <Header />
        <main className="container">
          <Outlet />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};

export default Layout;
