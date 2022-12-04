import "./style/container.css";

import HiName from "./hiName";
import DevText from "./devText";
import DevAnim from "./devAnim";
import CarouselMusic from "./carouselMusic";
import CarouselPhoto from "./carouselPhoto";
import Socials from "./socials";

import React from "react";

function Container() {
  return (
    <React.Fragment>
      <div className="container">
        <header id="HI">
          <HiName />
        </header>

        <section>
          <div id="DEV">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <DevText />
                </div>

                <a href="https://github.com/gpulch">
                  <div className="column2">
                    <DevAnim />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div id="AUDIO">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>
                    Hear <br /> &nbsp;&nbsp;&nbsp;&nbsp; Me <br />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Out...
                  </h1>
                </div>
                <div className="column2">
                  <div className="carouselMusic">
                    <CarouselMusic />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="GRAPHIC">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>
                    So... <br />
                    <br />
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...You See...
                  </h1>
                </div>
                <div className="column2">
                  <div className="carouselPhoto">
                    <CarouselPhoto />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="SOCIALS">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>Here are my socials:</h1>
                </div>

                <div className="column2">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Container;
