import React, { useState } from "react";
import "./ITWork.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function QnA({ question, answer }) {
  const [openAnswer, setOpenAnswer] = useState(false);

  return (
    <div className="QnA">
      <div className="question" onClick={() => setOpenAnswer(!openAnswer)}>
        <p>{question}</p>
        <span>
          {openAnswer ? (
            <AiOutlineCaretUp />
          ) : (
            <AiOutlineCaretDown />
          )}
        </span>
      </div>
      {openAnswer ? <div className="answer">{answer.map(line => <><br></br><p>{line}</p></>)}</div> : null}
    </div>
  );
}

export default QnA;
