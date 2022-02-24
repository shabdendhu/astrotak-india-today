import React from "react";
import { Col, DatePicker, Form, Input, Row, Select, TimePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { LeftOutlined } from "@ant-design/icons/lib/icons";
const AddNewProfile = ({ form }) => {
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
  const saveChanges = () => {
    form.validateFields().then(() => {
      console.log("kfjvkjvn");
    });
  };
  return (
    <>
      <Form form={form}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please Give valid name" }]}
        >
          <span className="labels">Name</span>
          <Input />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Date of Birth!" }]}
        >
          <span className="labels">Date of Birth</span>
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Time of Birth!" }]}
        >
          <span className="labels">Time of Birth</span>
          <TimePicker use12Hours />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Place of Birth!" }]}
        >
          <span className="labels">Place of Birth</span>
          <Input />
        </Form.Item>
        <Row gutter={[8, 6]}>
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Invalid Gender!" }]}
            >
              <span className="labels">Gender</span>
              <Select style={{ height: "50px" }}>
                <Select.Option>MALE</Select.Option>
                <Select.Option>FEMALE</Select.Option>
                <Select.Option>OTHERS</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Invalid Gender!" }]}
            >
              <span className="labels">Relation</span>
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
