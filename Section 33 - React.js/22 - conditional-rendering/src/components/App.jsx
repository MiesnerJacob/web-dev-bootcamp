import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

var currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* Ternary */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}

      {/* AND Operator */}
      {/* {currentTime > 17 && <h1>Why are you still working?</h1>} */}
    </div>
  );
}

export default App;
