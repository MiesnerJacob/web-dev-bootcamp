//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue

import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();

let header;
let headerColor;

if (currentTime < 12) {
  header = "Good Morning.";
  headerColor = { color: "red" };
} else if (currentTime >= 12 && currentTime < 18) {
  header = "Good Evening.";
  headerColor = { color: "green" };
} else {
  header = "Good Night.";
  headerColor = { color: "blue" };
}

ReactDOM.render(
  <h1 className="heading" style={headerColor}>
    {header}
  </h1>,
  document.getElementById("root")
);
