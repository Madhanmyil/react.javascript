import React from "react";

import ReactDOM from "react-dom";

const img1 ="index1.png"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellCheck="false">
      My Favourite Foods
    </h1>


    <div>
      <img src={ img1 }  >
      </img>


      </div>
  <ul>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </ul>

  </div>,

  document.getElementById("root")
);
