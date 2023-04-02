import React from "react";

function App() {
  const [heading, setHeading] = React.useState("Hello")
  const [hover, setHover] = React.useState(false);
  const [name, setName] = React.useState("");

  function headingChange() {
    setHeading("Hello " + name + "!")
    event.preventDefault();
  }

  function handleMouseOver() {
    setHover(true);
  };

  function handleMouseOut() {
    setHover(false);
  };

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <form onSubmit={headingChange}>
        <input type="text" 
        placeholder="What's your name?"
        onChange={handleChange}
        value={name} />
        <button className={hover ? "button-hover": null} 
        type="submit"
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        >
        Submit
        </button>
      </form>
    </div>
  );
}

export default App;
