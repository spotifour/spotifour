import React from "react";
import "./ITWork.css";
import QnA from "./QnA";
import { ITWorkQnAs, DTNUrl } from "../const";

function ITWork() {
  return (
    <div id="ITWork">
      <h2 className="sectionName">IT Work</h2>
      <h3 className="ITWorkInfo">
        Information collected from our interview with Hans Phung, CTO of{" "}
        <span>
          <a className="companyName" href={DTNUrl}>DTN Software Solutions company</a>
        </span>
        .
      </h3>
      <div className="QnAs">
        {ITWorkQnAs.map((item) => {
          return <QnA question={item.question} answer={item.answer} />;
        })}
      </div>
    </div>
  );
}

export default ITWork;
