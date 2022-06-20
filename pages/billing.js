import React from "react";
import TopNotification from "../components/templets/TopNotification";

const BillIngCard = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        boxShadow:
          "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        background: "white",
        borderRadius: "10PX",
        marginBottom: "10px",
      }}
    >
      <span style={{ marginLeft: "15px" }}><b>Date:</b> 13 Jul 1999</span>

      <span>₹ 1200</span>
    </div>
  );
};

const Billing = () => {
  return (
    <div style={{ paddingTop: "65px" }}>
      <TopNotification>
        <span>
          <b>Bill</b>: 3000₹
        </span>
        <span>
          <b>Pay Befour</b>: 31 jul 2022
        </span>
        {/* <button className="addMoney">Refresh</button> */}
      </TopNotification>
      <BillIngCard />
      <BillIngCard />
      <BillIngCard />
      <BillIngCard />
    </div>
  );
};

export default Billing;
