import {
  DeleteFilled,
  EditFilled,
  LeftOutlined,
  LoadingOutlined,
} from "@ant-design/icons/lib/icons";
import { Form, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { API } from "../../services/api.service";
import maper from "../../utils/maper";
import Notification from "../templets/Notification";
import ProfileForm from "./RelativesProfileForm";
const ListCard = ({
  data,
  setIsModalVisible,
  setSelecetedRow,
  setAddNewProfile,
  setactionType,
}) => {
  return (
    <div className="profile-list-card">
      <span>{data.name}</span>
      <span>{data.dob}</span>
      <span>{data.tob}</span>
      <span>{data.relation}</span>
      <span>
        <EditFilled
          onClick={() => {
            setactionType("edit");
            setAddNewProfile(true);
            setSelecetedRow(data.id);
          }}
          style={{ color: "#f28e23" }}
        />
      </span>
      <span>
        <DeleteFilled
          onClick={() => {
            setIsModalVisible(true);
            setSelecetedRow(data.id);
          }}
          style={{ color: "red" }}
        />
      </span>
    </div>
  );
};
const ConformDelete = ({
  isModalVisible,

  deleteRelative,
  setIsModalVisible,
  selectedRow,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      style={{ width: "500px" }}
      visible={isModalVisible}
      onOk={() => {
        deleteRelative(selectedRow);
      }}
      onCancel={handleCancel}
    >
      Are You Sure To Delete This User
    </Modal>
  );
};
const antIcon = <LoadingOutlined style={{ fontSize: 50,color:'#f28e23' }} spin />;

const ProfileList = () => {
  const [form] = Form.useForm();
  const [relatives, setRelatives] = useState([]);
  const [selectedRow, setSelecetedRow] = useState();
  const [actionType, setactionType] = useState("add");
  const [showLoader, setshowLoader] = useState(false);
  const [addNewProfile, setAddNewProfile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const getAllRelatives = async () => {
  //   setshowLoader(true);
  //   const { data, success } = await API.getAllRelatives({});
  //   if (success) {
  //     setshowLoader(false);
  //     console.log(maper.relativeList(data.allRelatives));
  //     setRelatives(maper.relativeList(data.allRelatives));
  //   }
  // };
  // const deleteRelative = async (id) => {
  //   const deleteRes = await API.deleteRelative(id);
  //   setIsModalVisible(false);
  //   getAllRelatives();
  //   console.log(deleteRes);
  // };
  // useEffect(() => {
  //   getAllRelatives();
  // }, []);

  return (
    <div>
      {!addNewProfile ? (
        <>
        <Notification />
          <div className="card-header">
            <span style={{ marginLeft: "10px" }}>NAME</span>
            <span style={{ marginLeft: "35px" }}>DOB</span>
            <span style={{ marginLeft: "44px" }}>TOB</span>
            <span style={{ marginLeft: "21px" }}>Relation</span>
          </div>
          {showLoader && (
            <div className="loader">
              <Spin indicator={antIcon} />
            </div>
          )}
          {relatives.map((e, i) => (
            <ListCard
              setactionType={(e) => {
                setactionType(e);
              }}
              setAddNewProfile={(e) => {
                setAddNewProfile(e);
              }}
              setSelecetedRow={(e) => {
                setSelecetedRow(e);
              }}
              setIsModalVisible={(e) => {
                setIsModalVisible(e);
              }}
              key={i}
              data={e}
            />
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button
              onClick={() => {
                setAddNewProfile(true);
                setactionType("add");
              }}
              style={{ width: "150px" }}
              className="save-profile-btn"
            >
              + Add New Profile
            </button>
          </div>
        </>
      ) : (
        <div>
          <div
            className="profile-form-header"
            onClick={() => {
              setAddNewProfile(false);
            }}
          >
            <LeftOutlined /> {actionType === "add" ? "Add New" : "Edit"} Profile
          </div>

          <ProfileForm
            actionType={actionType}
            selectedRow={selectedRow}
            getAllRelatives={getAllRelatives}
            setAddNewProfile={(e) => setAddNewProfile(e)}
            form={form}
          />
        </div>
      )}
      <ConformDelete
        selectedRow={selectedRow}
        // deleteRelative={deleteRelative}
        isModalVisible={isModalVisible}
        setIsModalVisible={(e) => {
          setIsModalVisible(e);
        }}
      />
    </div>
  );
};

export default ProfileList;
