# react.javascript
Created with CodeSandbox
import React from "react";

import ReactDOM from "react-dom";

const name = "Madhan";
const fname = "Ram";
const lname = "Prakash";
const num = 7;
ReactDOM.render(
  <div>
    <h1> Hello {name} !</h1>
    <h2> Hello {fname + " " + lname} </h2>
    <h2>
      hello {name} {fname}
    </h2>
    <p> Your lucky number is {num} </p>
    <p> Your lucky number is {2 + 5} </p>
    <p> Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
