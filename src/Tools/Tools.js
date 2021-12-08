import React from "react";
import "./tools.css";
import { repoGithubUrl } from "../const";
import { GoMarkGithub } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

function Tools() {
  return (
    <div id="tools">
      <h2 className="sectionName">Tools</h2>
      <div className="toolsButtons">
        <a className='toolsLinks' href={repoGithubUrl}>
          <button className="githubButton">
            <GoMarkGithub />
            <span>Website's GitHub repository</span>
          </button>
        </a>
        <a className='toolsLinks' href={"/"}>
          <button className="websiteButton">
            <CgWebsite />
            <span>Check our website here</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Tools;
