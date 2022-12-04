import "./style/socials.css";

import React, { useState, useEffect } from "react";

import youtubeImg from "./imgSocials/youtube.png";
import githubImg from "./imgSocials/github.png";
import linkedinImg from "./imgSocials/linkedin.png";

function Socials() {
  return (
    <React.Fragment>
      <div className="socials">
        <div>
          <a href="https://github.com/gpulch">
            <img className="githubImg" src={githubImg} alt="github"></img>
          </a>
          <a href="https://www.youtube.com/@pulchproductions7476">
            <img className="youtubeImg" src={youtubeImg} alt="youtube"></img>
          </a>
          <a href="https://www.linkedin.com/in/gpulch/">
            <img className="linkedinImg" src={linkedinImg} alt="linkedin"></img>
          </a>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default Socials;
