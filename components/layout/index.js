import React from "react";
import Footer from "../footer";
import TopBar from "../header";
import QuickAccessButton from "../templets/QuickAccessButton";
const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div style={{background:'#d4d4d4',minHeight:'100vh',marginTop:'80px'}}>{children}</div>
      <QuickAccessButton />
      <Footer/>
    </>
  );
};

export default Layout;
