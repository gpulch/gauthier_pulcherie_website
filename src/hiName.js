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
      <h1>
        Gauthier <br /> Pulcherie.
      </h1>
    </React.Fragment>
  );
}

export default HiText;
