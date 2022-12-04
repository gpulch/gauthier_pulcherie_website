import "./style/container.css";
import CarouselMusic from "./carouselMusic";
import CarouselPhoto from "./carouselPhoto";
import DevAnim from "./devAnim";
import React, { useState, useEffect } from "react";

function Container() {
  return (
    <React.Fragment>
      <div className="container">
        <header id="HI">
          <div className="row">
            <div className="column">
              <div className="column1">
                <h1>
                  Gauthier <br /> Pulcherie.
                </h1>
              </div>
            </div>
            {/* <div className="column">
              <div className="column2">
                <p>placeholder carte de visite </p>
              </div>
            </div> */}
          </div>
        </header>

        <section>
          <div id="AUDIO">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>
                    I <br /> &nbsp;&nbsp; Make <br />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Music.
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
                    Take <br /> Pictures.
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

          <div id="FLY">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>Drone.</h1>
                </div>

                <div className="column2">
                  <p>Bet you never seen it from this angle.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="DEV">
            <div className="row">
              <div className="column">
                <div className="column1">
                  <h1>Develop.</h1>
                </div>

                <div className="column2">
                  <DevAnim />
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
