import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="menu-container">
      <img style={{ height: "20px" }} src="hamburger.png" />
      <img style={{ height: "60px" }} src="icon.png" />
      <Link href="/myprofile">
        <img style={{ height: "30px" }} src="profile.png" />
      </Link>
    </div>
  );
};

export default TopBar;
