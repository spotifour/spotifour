import React, { useState } from "react";
import "./referennces.css";
import { refs } from "../const";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const References = () => {
  const [openRef, setOpenRef] = useState(false);
  return (
    <div id="references">
      <div className="referencesName" onClick={() => setOpenRef(!openRef)}>
        <p>References</p>
        <span>{openRef ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</span>
      </div>
      {openRef ? (
        <div className="referencesMain">
          {refs.map((ref, index) => {
            return (
              <>
                <br />
                <div>
                  <span>[{index + 1}] - </span>
                  <span>
                    {ref.name}
                    {"  "}
                  </span>
                  <span>
                    <a href={ref.link}>{ref.link}</a>
                    {"  "}
                  </span>
                  <span>{ref.date}</span>
                </div>
              </>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default References;
