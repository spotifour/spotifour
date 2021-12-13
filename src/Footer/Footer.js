import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerNav">
        <span>
          <a className="footerNavItem" href="#teamProfile">
            Team Profile
          </a>
        </span>
        <span>
          <a className="footerNavItem" href="#tools">
            Tools
          </a>
        </span>
        <span>
          <a className="footerNavItem" href="#ITWork">
            IT work
          </a>
        </span>
        <span>
          <a className="footerNavItem" href="#ITTechnologies">
            IT Technologies
          </a>
        </span>
        <span>
          <a className="footerNavItem" href="#projectIdeas">
            Project Ideas
          </a>
        </span>
        <span>
          <a className="footerNavItem" href="#feedback">
            Feedback
          </a>
        </span>
      </div>
      <div className="copyright">© Copyright 2021 Spotifour</div>
    </footer>
  );
}

export default Footer;
