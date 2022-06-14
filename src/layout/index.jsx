import React from "react";
import Header from "./header/header.jsx";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top/index.jsx";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
