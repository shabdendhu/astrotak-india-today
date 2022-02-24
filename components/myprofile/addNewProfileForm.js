import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
} from "antd";
import maper from "../../utils/maper";
import { API } from "../../services/api.service";

const AddNewProfile = ({ setAddNewProfile, getAllRelatives }) => {
  const [palces, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [form] = Form.useForm();
  const relations = [
    { name: "Father", id: 1 },
    { name: "Mother", id: 2 },
    { name: "Brother", id: 3 },
    { name: "Sister", id: 4 },
    { name: "Spouse", id: 5 },
    { name: "Son", id: 6 },
    { name: "Daughter", id: 7 },
    { name: "Father in Law", id: 8 },
    { name: "Mother in Law", id: 9 },
    { name: "Brother in Law", id: 10 },
    { name: "Sister in Law", id: 11 },
    { name: "Daughter in Law", id: 12 },
    { name: "Uncel", id: 13 },
    { name: "Aunt", id: 14 },
    { name: "Friend", id: 15 },
    { name: "Fiance", id: 16 },
  ];
  const handleChangePlace = async (e) => {
    if (e) {
      const res = await API.getPlace({ id: e });
      if (res.success) {
        setPlaces(res.data || []);
        console.log(res.data);
      }
    }
  };

  const saveChanges = () => {
    form.validateFields().then(async (value) => {
      value.birthPlace = selectedPlace;
      let payload = maper.addRealtiveData(value);
      const addRes = await API.addNewRelative(payload);
      if (addRes.data.success) {
        form.resetFields();
        setAddNewProfile(false);
        getAllRelatives();
      }
      console.log(payload, addRes);
    });
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
    palces.forEach((e, i) => {
      if (data === e.placeName) {
        setSelectedPlace(e);
      }
    });
  };

  return (
    <>
      <Form form={form}>
        <span className="labels">Name</span>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please Give valid name" }]}
        >
          <Input />
        </Form.Item>

        <span className="labels">Date of Birth</span>
        <Form.Item
          name="dob"
          rules={[{ required: true, message: "Invalid Date of Birth!" }]}
        >
          <DatePicker />
        </Form.Item>
        <span className="labels">Time of Birth</span>
        <Form.Item
          name="tob"
          rules={[{ required: true, message: "Invalid Time of Birth!" }]}
        >
          <TimePicker use12Hours />
        </Form.Item>
        <span className="labels">Place of Birth</span>
        <Form.Item
          name="placeOfBirth"
          rules={[{ required: true, message: "Invalid Place of Birth!" }]}
        >
          <AutoComplete
            onSelect={onSelect}
            style={{ width: "100%", height: "50px" }}
            onSearch={handleChangePlace}
            placeholder="search here"
          >
            {palces.map((e) => (
              <AutoComplete.Option key={e.placeId} value={e.placeName}>
                {e.placeName}
              </AutoComplete.Option>
            ))}
          </AutoComplete>
        </Form.Item>
        <Row gutter={[8, 6]}>
          <Col span={12}>
            <span className="labels">Gender</span>
            <Form.Item
              name="gender"
              rules={[{ required: true, message: "Invalid Gender!" }]}
            >
              <Select style={{ height: "50px" }}>
                <Select.Option kay={1} value="MALE">
                  MALE
                </Select.Option>
                <Select.Option kay={1} value="FEMALE">
                  FEMALE
                </Select.Option>
                <Select.Option kay={1} value="OTHERS">
                  OTHERS
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <span className="labels">Relation</span>
            <Form.Item
              name="relation"
              rules={[{ required: true, message: "Invalid Gender!" }]}
            >
              <Select style={{ height: "50px" }}>
                {relations.map((e, i) => (
                  <Select.Option value={e.id} key={i}>
                    {e.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={saveChanges} className="save-profile-btn">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default AddNewProfile;
