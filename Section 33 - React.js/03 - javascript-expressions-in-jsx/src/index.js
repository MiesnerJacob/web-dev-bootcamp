import React from "react";
import ReactDOM from "react-dom";

var firstName = "Jacob";
var lastName = "Miesner";
var luckyNumber = 3;

ReactDOM.render(
  <div>
    <h1>
      Hello {firstName} {lastName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
