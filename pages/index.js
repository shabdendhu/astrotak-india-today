/*eslint-disable */
import { Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import Notification from "../components/footer/Notification";
import BalanceBar from "../components/templets/balanceBar";
import QuestionIcon from "../components/templets/QuestionIcon";
import { API } from "../services/api.service";
const { Option } = Select;

const Home = () => {
  const [category, setcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({ suggestions: [] });
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const selectQuestionCategory = async () => {
    const res = await API.getAllCategory({});
    console.log(res);
    setcategory(res.data);
    setSelectedCategory(res.data[0]);
  };
  useEffect(() => {
    selectQuestionCategory();
  }, []);
  const handleCategoryCahnge = (e) => {
    category.forEach((item) => {
      if (e.value === item.id) {
        setSelectedCategory(item);
      }
    });
  };
  return (
    <>
      <BalanceBar />
      <div className="home-container">
        <span className="question">Ask a Question</span>
        <br />
        <span>
          Seek accurate answer to your life problems and get guidance towords
          the right path. Whether the problem is related to love, self,
          business, money. education or work, our astrologers will do an in
          depth study of your birth chart to provide personalized response along
          with remedies.
        </span>
        <br />
        <span className="question">Choose Category</span>
        <br />
        <Select
          onChange={handleCategoryCahnge}
          style={{ width: "100%", marginTop: "5px" }}
          value={{
            key: selectedCategory.id,
            label: selectedCategory.name,
            value: selectedCategory.id,
          }}
          labelInValue
        >
          {category.map((e) => (
            <Option kay={e.id} value={e.id}>
              {e.name}
            </Option>
          ))}
        </Select>
        <br />
        <TextArea
          maxLength={150}
          showCount
          value={selectedQuestion}
          onChange={(e) => {
            setSelectedQuestion(e.target.value);
          }}
          placeholder="Type a question Here"
          style={{
            width: "100%",
            borderRadius: "4px",
            outline: "none",
            fontSize: "17px",
            marginTop: "15px",
            height: "100px",
          }}
        />
        <br />
        <br />
        <span className="question">Ideas what to ask (Select Any)</span>
        <br />
        {selectedCategory.suggestions.map((e, i) => (
          <div
            onClick={() => {
              setSelectedQuestion(e);
            }}
            key={i}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #d6d6d6",
                paddingBottom: "10px",
                margin: "0px 10px",
              }}
            >
              <QuestionIcon /> {e}
            </span>
            <br />
          </div>
        ))}
        Sheeking accurate answer to difficult questions troubling your mind? Ask
        creadible astrologers to know what future has in store for you.
        <br />
        <br />
        <div
          style={{
            background: "#ffe5d4",
            color: "#ff944e",
            padding: "6px 0px",
            borderRadius: "5px",
          }}
        >
          <ul>
            <li>
              personalized responses provided by our team of Vedic astrologers
              within 24 hours.
            </li>
            <li>
              Qualified and experienced astrologers will look into your birth
              chart and provide the right guidance.
            </li>
            <li>
              You can seek answers to any part of your life and for most
              pressing issues.
            </li>
            <li>
              Our team of Vedic astrologers will not just pro answers but also
              suggest a remedial solutions
            </li>
          </ul>
        </div>
      </div>
      <Notification selectedCategory={selectedCategory}/>
    </>
  );
};

export default Home;
