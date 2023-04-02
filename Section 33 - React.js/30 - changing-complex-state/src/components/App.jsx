import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })

  function nameChange(event) {
    const newName = event.target.value;
    const nameType = event.target.name;

    if (nameType === "fName") {
      setFullName({ ...fullName, fName: newName });
    } else {
      setFullName({ ...fullName, lName: newName });
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={nameChange} value={fullName.fName} placeholder="First Name" />
        <input name="lName" onChange={nameChange} value={fullName.lName} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
