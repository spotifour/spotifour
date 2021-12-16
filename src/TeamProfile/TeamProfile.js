import React, { useState, useMemo } from "react";
import "./teamProfile.css";
import { teamProfileInfo, teamMembers } from "../const";

function TeamProfile() {
  const [teamProfileSection, setTeamProfileSection] = useState("teamName");

  const membersInfo = teamMembers.map((member) => {
    return (
      <div>
        <img className="memberImg" src={member.image} alt={member.name} />
        <h3 className="memberName">{member.name}</h3>
      </div>
    );
  });
  
  const buttons = useMemo(
    () =>
      Object.keys(teamProfileInfo).map((section) => {
        const buttonStyles =
          section === teamProfileSection
            ? {
                backgroundColor: "#fff",
                color: "#000000",
                borderColor: "#000000",
              }
            : {};
        let buttonText = "";
        switch (section) {
          case "teamName":
            buttonText = "1. Team Name";
            break;
          case "personalInformation":
            buttonText = "2. Personal Information";
            break;
          case "teamProfile":
            buttonText = "3. Team Profile";
            break;
          case "idealJobs":
            buttonText = "4. Ideal Jobs";
            break;
          default:
            break;
        }
        return (
          <button
            style={buttonStyles}
            className="teamProfileButton"
            onClick={() => setTeamProfileSection(section)}
          >
            {buttonText}
          </button>
        );
      }),
    [teamProfileSection]
  );

  const text = useMemo(() => {
    return teamProfileInfo[teamProfileSection].map((section) => {
      const content =
        teamProfileSection === "personalInformation" ? (
          <>
            <p style={{ color: "#000000", fontWeight: 700 }}>{section.name}</p>
            <br />
            <p>{section.description}</p>
            <br />
          </>
        ) : (
          <>
            <p>{section}</p>
            <br />
          </>
        );
      return content;
    });
  }, [teamProfileSection]);

  return (
    <div id="teamProfile">
      <h2 className="sectionName">Team Profile</h2>
      <div className="teamMembers">{membersInfo}</div>
      <div className="teamProfileMain">
        <div className="teamProfileButtons">{buttons}</div>
        <div className="teamProfileText">{text}</div>
      </div>
    </div>
  );
}

export default TeamProfile;
