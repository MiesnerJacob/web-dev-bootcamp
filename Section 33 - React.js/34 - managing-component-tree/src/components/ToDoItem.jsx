import React, { useState } from "react";

function ToDoItem(props) {
    return (
    <li 
    onClick={() => {
        props.onChecked(props.id);
    }} 
    value={props.item}
    >
    {props.item}
    </li>
    )
  }
  
  export default ToDoItem;
  