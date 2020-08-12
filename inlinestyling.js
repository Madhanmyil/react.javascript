import React from "react";

import ReactDOM from "react-dom";

const customStyle = {

  color:" red ",
  fontSize : " 20px ",
  border : " 1px solid black "
}

customStyle.color= "blue";

ReactDOM.render(
  <div>
<h1 style={{ color:"red" }}>Hello Madhan</h1>
<h2 style={ customStyle }> NILAN </h2>
    </div> ,

  document.getElementById("root")
);
