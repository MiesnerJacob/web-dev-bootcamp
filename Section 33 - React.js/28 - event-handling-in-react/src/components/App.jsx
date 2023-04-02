import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello")

  function headingChange() {
    setHeading("Submitted")
  }

  const [hover, setHover] = React.useState(false);

  function handleMouseOver() {
    setHover(true);
  };

  function handleMouseOut() {
    setHover(false);
  };

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button className={hover ? "button-hover": null} 
      onClick={headingChange} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
      >
      Submit
      </button>
    </div>
  );
}

export default App;
