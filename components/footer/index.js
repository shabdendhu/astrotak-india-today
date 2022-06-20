import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const selected = (name) => router.pathname === name;

  return (
    <div className="footer">
      <Link href="/">
        <span
          style={{ color: selected("/") ? "#f28e23" : "black" }}
          className="footer-icon-container"
        >
          <span className="material-symbols-outlined footer-icon">house</span>
          Home
        </span>
      </Link>
      <Link href="/billing">
        <span
          style={{ color: selected("/billing") ? "#f28e23" : "black" }}
          className="footer-icon-container"
        >
          {/* <img alt='img' className="footer-icon" src="talk.png" /> */}
          <span className="material-symbols-outlined footer-icon">
            currency_rupee
          </span>
          BillIng
        </span>
      </Link>
      <Link href="/meal">
        <span
          style={{ color: selected("/meal") ? "#f28e23" : "black" }}
          className="footer-icon-container"
        >
          <span className="material-symbols-outlined footer-icon">
            restaurant
          </span>
          Meal
        </span>
      </Link>
      <Link href="/reviews">
        <span
          style={{ color: selected("/reviews") ? "#f28e23" : "black" }}
          className="footer-icon-container"
        >
          <span className="material-symbols-outlined footer-icon">reviews</span>
          Reviews
        </span>
      </Link>
      <Link href="/chat">
        <span
          style={{ color: selected("/chat") ? "#f28e23" : "black" }}
          className="footer-icon-container"
        >
          <span className="material-symbols-outlined footer-icon">chat</span>
          Chat
        </span>
      </Link>
    </div>
  );
};

export default Footer;
