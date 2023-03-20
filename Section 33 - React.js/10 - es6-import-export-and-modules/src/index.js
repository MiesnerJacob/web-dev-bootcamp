import React from "react";
import ReactDOM from "react-dom";
import pi, { piSquared, piCubed } from "./math.js";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{piSquared()}</li>
    <li>{piCubed()}</li>
  </ul>,
  document.getElementById("root")
);
