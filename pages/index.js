/*eslint-disable */
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import Notification from "../components/footer/Notification";
import TopNotification from "../components/templets/TopNotification";

const MealBreak = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        background: "white",
        borderRadius: "10PX",
        marginBottom: "10px",
      }}
    >
      <span>
        <img
          style={{ height: 50, borderRadius: "20px" }}
          src="/default_profile.jpg"
        />
        <span style={{ marginLeft: "15px" }}>Lunch(CKN)</span>
      </span>
      <span> ₹ 60</span>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <TopNotification>
        Wallet Balance : 3000₹
        <button className="addMoney">Refresh</button>
      </TopNotification>
      <div className="home-container">
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
        <MealBreak />
      </div>
      <Notification />
    </>
  );
};

export default Home;
