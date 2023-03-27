import React from "react";
import Card from "./Card.jsx";
import Avatar from "./Avatar";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img="https://lh4.googleusercontent.com/nnFBV5GViIBp3eIT2t-9TJp5XFeIVS7e4XxGr_PPT05kk21Y1MbJyza7BlrBLJecUamnm37MlMSSaqXVqdYn-mfAzEVPQfjtUghpeeYZ2LR-RzeeHoyUdqOF6BcRfsZGiw=w1280" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
