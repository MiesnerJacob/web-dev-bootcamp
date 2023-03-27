import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  color: "red",
  fontSize: "42 px",
  border: "2px solid powderblue"
};

const listStyles = {
  color: "blue",
  fontSize: "12 px",
  border: "5px solid black"
};

const today = new Date();
if (today.getDay() === 0) {
  headerStyles.border = "None";
}

ReactDOM.render(
  <div>
    <h1 style={headerStyles}>My Favourite Foods</h1>
    <ul style={listStyles}>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);
