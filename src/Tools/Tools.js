import React from "react";
import "./tools.css";
import { repoGithubUrl, toolsComment } from "../const";
import { GoMarkGithub } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";

function Tools() {
  return (
    <div id="tools">
      <h2 className="sectionName">Tools</h2>
      <div className="toolsButtons">
        <a className='toolsLinks' href={repoGithubUrl} target="_blank" rel="noreferrer">
          <button className="githubButton">
            <GoMarkGithub />
            <span>Website's GitHub repository</span>
          </button>
        </a>
        <a className='toolsLinks' href={"/spotifour"} target="_blank" rel="noreferrer">
          <button className="websiteButton">
            <CgWebsite />
            <span>Check our website here</span>
          </button>
        </a>
      </div>
      <div className="toolsComment">
        <h3 className="toolsCommentName">Comments</h3>
        <p>{toolsComment.para1}</p>
        <br />
        <p>{toolsComment.para2}</p>
      </div>
    </div>
  );
}

export default Tools;
