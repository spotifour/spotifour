import React from "react";
import "./teamProfile.css";
import TeamMember from "./teamMember";
import { teamMembers } from "../const";

function TeamProfile() {
  return (
    <div id="teamProfile">
      <h2 className="sectionNameTP">Team Profile</h2>
      <div className="teamDescription">
        {teamMembers.map((member) => {
          return (
            <TeamMember
              img={member.img}
              name={member.name}
              description={member.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TeamProfile;
