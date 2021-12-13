import React, { useMemo } from "react";
import "./feedback.css";


function MemberFeedback({ name, feedback, image }) {
  const itemDescription = useMemo(
    () =>
      feedback.map((paragraph) => {
        return (
          <>
            <p className='feedback'>{paragraph}</p>
            <br />
          </>
        );
      }),
    [feedback]
  );
  return (
    <div className="memberFeedback">
      <h3 className="memberFeedbackName">{name}</h3>
      <img className="memberFeedbackImage" src={image} alt={name} />
      {itemDescription}
    </div>
  );
}

export default MemberFeedback;
