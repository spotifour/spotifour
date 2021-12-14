import React from "react";
import "./ITWork.css";
import QnA from "./QnA";
import { ITWorkIntro, ITWorkQnAs, ITWorkSummary } from "../const";

function ITWork() {
  return (
    <div id="ITWork">
      <h2 className="sectionName">IT Work</h2>
      <div className="ITWorkMain">
        <QnA question={ITWorkIntro.question} answer={ITWorkIntro.answer} />
        <div>
          <h3 className="ITWorkInfo">Interview questions and answers</h3>
          <div className="QnAs">
            {ITWorkQnAs.map((item) => {
              return <QnA question={item.question} answer={item.answer} />;
            })}
          </div>
        </div>
        <div>
          <h3 className="ITWorkInfo">Our summarization</h3>
          <div className="QnAs">
            {ITWorkSummary.map((item) => {
              return <QnA question={item.question} answer={item.answer} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITWork;
