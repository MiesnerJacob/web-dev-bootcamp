import React from "react";

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

function Heading() {
  return (
    <div>
      <h1 className="heading" style={headerColor}>
        {header}
      </h1>
    </div>
  );
}

export default Heading;
