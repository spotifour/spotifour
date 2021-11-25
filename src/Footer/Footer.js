import React from "react";
import "./footer.css";
import { GoMarkGithub } from "react-icons/go";
import { groupGithubUrl } from "../const";

function Footer() {
  return (
    <footer className='footer'>
      <a href={groupGithubUrl}>
        Please check our group's GitHub <GoMarkGithub />
      </a>
    </footer>
  );
}

export default Footer;
