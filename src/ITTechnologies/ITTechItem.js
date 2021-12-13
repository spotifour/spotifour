import React, { useMemo } from "react";
import "./ITTechnologies.css";

function ITTechItem({ technology, description, image }) {
  const itemDescription = useMemo(
    () =>
      Object.keys(description).map((item) => {
        return (
          <>
            <h3 className="ITTechItemSection">{item}</h3>
            {description[item].map((paragraph) => {
              return (
                <>
                  <p className="ITTechDescription">{paragraph}</p>
                  <br />
                </>
              );
            })}
          </>
        );
      }),
    [description]
  );
  return (
    <div className="ITTechItem">
      <h3 className="ITTechName">{technology}</h3>
      <img className="ITTechImage" src={image} alt={technology} />
      {itemDescription}
    </div>
  );
}

export default ITTechItem;
