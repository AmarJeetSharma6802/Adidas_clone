import React from "react";
import FirstHome from "./pageComponent/home/FirstHome";
import Footer from "./pageComponent/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <FirstHome />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
