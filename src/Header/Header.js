import React from "react";
import "./header.css";
import { teamName } from "../const";
import { GoMarkGithub } from "react-icons/go";
import { repoGithubUrl } from "../const";

function Header() {
  return (
    <div id="title">
      <header className="navBar">
        <h2 className="teamName">{teamName}</h2>
        <div className="navItems">
          <span>
            <a className="navItem" href="#teamProfile">
              Team Profile
            </a>
          </span>
          <span>
            <a className="navItem" href="#tools">
              Tools
            </a>
          </span>
          <span>
            <a className="navItem" href="#ITWork">
              IT work
            </a>
          </span>
          <span>
            <a className="navItem" href="#ITTechnologies">
              IT Technologies
            </a>
          </span>
          <span>
            <a className="navItem" href="#projectIdeas">
              Project Ideas
            </a>
          </span>
          <span>
            <a className="navItem" href="#feedback">
              Feedback
            </a>
          </span>
        </div>
      </header>
      <div className="banner">
        <div className="bannerRight">
          <h1 className="message">
            Introduction to IT - Assignment 2: The IT World
          </h1>
          <a className='toolsLinks' href={repoGithubUrl}>
            <button className="githubButton">
              <GoMarkGithub />
              <span>Website's GitHub repository</span>
            </button>
          </a>
        </div>
        <div className="bannerLeft">
          <img className="bannerImg" src="Logo.png" alt="programmer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
