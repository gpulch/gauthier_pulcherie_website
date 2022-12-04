import "./style/hiName.css";

import React from "react";

function HiText() {
  return (
    <React.Fragment>
      <div className="myNameIs">
        <h2>
          Hi, <br />
          My name is
        </h2>
      </div>
      <div className="name">
        <h1>
          Gauthier <br /> Pulcherie.
        </h1>
      </div>
    </React.Fragment>
  );
}

export default HiText;
