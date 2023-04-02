import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function contactChange(event) {
      const newValue = event.target.value;
      const changeField = event.target.name;
    
      setContact(prevValue => {
        if (changeField === "fName") {
          return {
            fName: newValue,
            lName: prevValue.lName,
            email: prevValue.email
          };
        } else if (changeField === "lName") {
          return {
            fName: prevValue.fName,
            lName: newValue,
            email: prevValue.email
          };
        } else if (changeField === "email") {
          return {
            fName: prevValue.fName,
            lName: prevValue.lName,
            email: newValue
          };
        }
      });
    }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={contactChange} value={contact.fName} placeholder="First Name" />
        <input name="lName" onChange={contactChange} value={contact.lName} placeholder="Last Name" />
        <input name="email" onChange={contactChange} value={contact.email} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
