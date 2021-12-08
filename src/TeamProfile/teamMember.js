import React from "react";
import "./teamProfile.css";

function TeamMember({name, img, description}) {
  return (
    <div className='teamMember'>
      <img className='memberImg' src={img} alt={name}/>
      <h3 className='memberName'>{name}</h3>
      <p className='memberDescription'>{description}</p>
    </div>
  );
}

export default TeamMember; 