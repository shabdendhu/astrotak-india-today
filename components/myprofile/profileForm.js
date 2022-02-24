import { DatePicker, Form, Input, Select, TimePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const ProfileForm = ({form}) => {
    const saveChanges=()=>{
        form
            .validateFields().then(()=>{
              console.log('kfjvkjvn')
            })
      }
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
          name="email"
          rules={[{ required: true, message: "Please give valid email" }]}
        >
          <span className="labels">Email Address</span>
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Number" }]}
        >
          <span className="labels">Phone Number</span>
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Gender!" }]}
        >
          <span className="labels">Gender</span>
          <Select style={{ height: "50px" }}>
            <Select.Option>djwcj</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Language!" }]}
        >
          <span className="labels">Language</span>
          <Select style={{ height: "50px" }}>
            <Select.Option>djwcj</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Maritual Status!" }]}
        >
          <span className="labels">Maritual Status</span>
          <Select style={{ height: "50px" }}>
            <Select.Option>djwcj</Select.Option>
          </Select>
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
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Address!" }]}
        >
          <span className="labels">Address</span>
          <TextArea />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid City/State!" }]}
        >
          <span className="labels">City/State</span>
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Invalid Pincode!" }]}
        >
          <span className="labels">Pincode</span>
          <Input />
        </Form.Item>
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

export default ProfileForm;
