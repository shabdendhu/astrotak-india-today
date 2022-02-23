import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer-icon-container">
        <img className="footer-icon" src="home.png" />
        Home
      </span>
      <span className="footer-icon-container">
        <img className="footer-icon" src="talk.png" />
        Talk
      </span>
     <Link href='/'>
     <span className="footer-icon-container">
        <img className="footer-icon" src="ask.png" />
        Ask Question
      </span></Link>
      <span className="footer-icon-container">
        <img className="footer-icon" src="reports.png" />
        Reports
      </span>
      <span className="footer-icon-container">
        <img className="footer-icon" src="talk.png" />
        Chat
      </span>
    </div>
  );
};

export default Footer;
