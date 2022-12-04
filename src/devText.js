import "./style/devText.css";

import React, { useState, useEffect } from "react";

function DevText() {
  return (
    <React.Fragment>
      <h1>And I've got a </h1>
      {/* <div style={{ color: "#003B00" }}> */}
        <div className="hoverDev">
          <h1>"developing"</h1>
        </div>
      {/* </div> */}
      <h1>situation.</h1>
    </React.Fragment>
  );
}

export default DevText;
