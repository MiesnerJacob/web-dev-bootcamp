import React from "react";
import Card from "./Card.jsx";
import Avatar from "./Avatar";
import contacts from "../contacts.js";

function createCard(contact) {
  return (
    < Card
      id={contact.id}
      key={contact.key}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img="https://lh4.googleusercontent.com/nnFBV5GViIBp3eIT2t-9TJp5XFeIVS7e4XxGr_PPT05kk21Y1MbJyza7BlrBLJecUamnm37MlMSSaqXVqdYn-mfAzEVPQfjtUghpeeYZ2LR-RzeeHoyUdqOF6BcRfsZGiw=w1280" />
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
