import React from "react";
import "./ITTechnologies.css";

function ITTechItem({technology, description, image}) {
  return (
    <div className='ITTechItem'>
      <h3 className='ITTechName'>{technology}</h3>
      <img className='ITTechImage' src={image} alt={technology} />
      <p className='ITTechDescription'>{description}</p>
    </div>
  );
}

export default ITTechItem; 