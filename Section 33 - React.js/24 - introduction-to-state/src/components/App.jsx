import React from "react";

var isDone = false;

var strikeThrough = { textDecoration: "line-through" }

function strike () {
  isDone = true;
}

function unStrike () {
  isDone = false;
}

// This method will not work because react components do not automatically re-render!!!
// We need to use React Hooks to accomplish changing the app according to its state
function App() {
  return (
    <div>
      <p style={isDone ? strikeThrough : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
