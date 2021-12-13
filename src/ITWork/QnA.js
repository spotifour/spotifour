import React, { useState } from "react";
import "./ITWork.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function QnA({ question, answer }) {
  const [openAnswer, setOpenAnswer] = useState(false);

  return (
    <div className="QnA">
      <div className="question">
        <p>{question}</p>
        <span>
          {openAnswer ? (
            <AiOutlineCaretUp onClick={() => setOpenAnswer(false)} />
          ) : (
            <AiOutlineCaretDown onClick={() => setOpenAnswer(true)} />
          )}
        </span>
      </div>
      {openAnswer ? <div className="answer">{answer.map(line => <><br></br><p>{line}</p></>)}</div> : null}
    </div>
  );
}

export default QnA;
