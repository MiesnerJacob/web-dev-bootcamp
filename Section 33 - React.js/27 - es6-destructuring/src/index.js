// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js"

// Define Tesla variables
var tesla = {model: cars[1].model}
var teslaTopSpeed = cars[1].speedStats.topSpeed
var teslaTopColour = cars[1].coloursByPopularity[0]

// Define Honda variables
var honda = {model: cars[0].model}
var hondaTopSpeed = cars[0].speedStats.topSpeed
var hondaTopColour = cars[0].coloursByPopularity[0]

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
