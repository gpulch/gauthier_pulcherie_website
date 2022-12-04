import "./style/devAnim.css";

import React, { useState, useEffect } from "react";

function DevAnim() {
  return (
    <React.Fragment>
      <div className="helloWorld">
        <h1 className="start">console.log("</h1>
        <div class="string">
          <h1 class="greeting en">Hello World!</h1>
          <h1 class="greeting es">¡Hola Mundo!</h1>
          <h1 class="greeting de">Hallo Welt!</h1>
          <h1 class="greeting it">Ciao Mondo!</h1>
        </div>
        <h1 className="end">");</h1>
      </div>
    </React.Fragment>
  );
}

export default DevAnim;
