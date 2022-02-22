import { Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import Notification from "../components/footer/Notification";
import BalanceBar from "../components/templets/balanceBar";
import QuestionIcon from "../components/templets/QuestionIcon";
const { Option } = Select;

const Home = () => {
  const questions = [
    `When is the right for me to introduce my 
  boyfriend /
  girlfriend?`,
    `Doubtful about taking my relationship to next level?`,
    `How will i meet my potential partner?`,
    `Is my wife/Husband faithful`,
    `Will i ever meet my true love?`,
    `When will i get in relationship?`,
  ];
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
          style={{ width: "100%", marginTop: "5px" }}
          defaultValue={{ key: 1, label: "Love", value: 1 }}
          labelInValue
        >
          <Option value="jack">Jack</Option>
        </Select>
        <br />
        <TextArea
        maxLength={150}
        showCount
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
        {questions.map((e, i) => (
          <>
            <span
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #d6d6d6",
                paddingBottom: "10px",
                margin:'0px 10px'
              }}
            >
              <QuestionIcon /> {e}
            </span>
            <br />
          </>
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
            borderRadius:'5px'
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
      <Notification/>
    </>
  );
};

export default Home;
