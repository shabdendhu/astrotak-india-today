import {
  DeleteFilled,
  EditFilled,
  LeftOutlined,
} from "@ant-design/icons/lib/icons";
import { Form, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { API } from "../../services/api.service";
import maper from "../../utils/maper";
import AddNewProfile from "./addNewProfileForm";
const ListCard = ({ data, setIsModalVisible, setSelecetedRow }) => {
  return (
    <div className="profile-list-card">
      <span>{data.name}</span>
      <span>{data.dob}</span>
      <span>{data.tob}</span>
      <span>{data.relation}</span>
      <span>
        <EditFilled
          onClick={() => {
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
  handleCancel,
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
const ProfileList = () => {
  const [form] = Form.useForm();
  const [relatives, setRelatives] = useState([]);
  const [addNewProfile, setAddNewProfile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelecetedRow] = useState();
  const getAllRelatives = async () => {
    const { data, success } = await API.getAllRelatives({});
    if (success) {
      console.log(maper.relativeList(data.allRelatives));
      setRelatives(maper.relativeList(data.allRelatives));
    }
  };
  const deleteRelative = async (id) => {
    const deleteRes = await API.deleteRelative(id);
    setIsModalVisible(false);
    getAllRelatives();
    console.log(deleteRes);
  };
  useEffect(() => {
    getAllRelatives();
  }, []);

  return (
    <div>
      {!addNewProfile ? (
        <>
          <div className="card-header">
            <span style={{ marginLeft: "10px" }}>NAME</span>
            <span style={{ marginLeft: "35px" }}>DOB</span>
            <span style={{ marginLeft: "44px" }}>TOB</span>
            <span style={{ marginLeft: "21px" }}>Relation</span>
          </div>
          {relatives.map((e, i) => (
            <ListCard
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
            <LeftOutlined /> Add New Profile
          </div>

          <AddNewProfile
            selectedRow={selectedRow}
            getAllRelatives={getAllRelatives}
            setAddNewProfile={(e) => setAddNewProfile(e)}
            form={form}
          />
        </div>
      )}
      <ConformDelete
        selectedRow={selectedRow}
        deleteRelative={deleteRelative}
        isModalVisible={isModalVisible}
        setIsModalVisible={(e) => {
          setIsModalVisible(e);
        }}
      />
    </div>
  );
};

export default ProfileList;
