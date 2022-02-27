/*eslint-disable */
import React, { useState } from "react";
import { WalletFilled } from "@ant-design/icons/lib/icons";
import { Form } from "antd";
import ProfileForm from "../components/myprofile/profileForm";
import ProfileList from "../components/myprofile/profileList";
const MyProfile = () => {
  const [form] = Form.useForm();
  const [profile, setProfile] = useState(1);
  const [selectedTab, setselectedTab] = useState(1);

  return (
    <>
      <div className="profile-tab">
        <span
          onClick={() => {
            setselectedTab(1);
          }}
          className={selectedTab === 1 ? "selected-tab tab" : "tab"}
        >
          My Profile
        </span>
        <span
          onClick={() => {
            setselectedTab(2);
          }}
          className={selectedTab === 2 ? "selected-tab tab" : "tab"}
        >
          Order History
        </span>
      </div>
      <div className="profile-btn-container">
        <span
          onClick={() => {
            setProfile(1);
          }}
          className={
            profile === 1 ? "select-button profile-button" : "profile-button"
          }
        >
          Basic profile
        </span>
        <span
          onClick={() => {
            setProfile(2);
          }}
          className={
            profile === 2 ? "select-button profile-button" : "profile-button"
          }
        >
          Friends and Family profile
        </span>
      </div>
      <div className="profile-container">
        <div className="profile-balance-bar">
          <WalletFilled style={{ fontSize: "20px" }} /> Wallet Balance: ₹0
          <button style={{ border: "1px solid" }} className="addMoney">
            Add Money
          </button>
        </div>
        {profile === 1 ? <ProfileForm form={form} /> : <ProfileList />}
      </div>
    </>
  );
};

export default MyProfile;
