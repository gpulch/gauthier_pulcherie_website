import './style/topSection.css'

import React, { useState, useEffect } from 'react';

function TopSection() {

  return (
    <React.Fragment>
      <header>
        <div className="topSection">
          <nav>
            <ul>
              <li>
                <a href="#HI">Hi</a>
              </li>
              <li>
                <a href="#DEV">Dev</a>
              </li>
              <li>
                <a href="#AUDIO">Audio</a>
              </li>
              <li>
                <a href="#GRAPHIC">Photo</a>
              </li>
              <li>
                <a href="#SOCIALS">Socials</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </React.Fragment>
  );
}

export default TopSection;
