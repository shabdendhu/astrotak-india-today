import React from "react";
import Footer from "../footer";
import TopBar from "../header";
import QuickAccessButton from "../templets/QuickAccessButton";
const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div>{children}</div>
      <QuickAccessButton />
      <Footer/>
    </>
  );
};

export default Layout;
