//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const steak_img_url =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Reel_and_Brand_-_September_2021_-_Sarah_Stierch_05.jpg/1280px-Reel_and_Brand_-_September_2021_-_Sarah_Stierch_05.jpg";
const pizza_img_url =
  "https://assets2.devourtours.com/wp-content/uploads/joes-pizza-nyc.jpeg";
const sushi_img_url =
  "https://www.brproud.com/wp-content/uploads/sites/80/2022/02/GettyImages-1053854126.jpg?w=876&h=493&crop=1";

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="fasle">
      My Favorite Foods
    </h1>
    <ul>
      <li>Steak</li>
      <img alt="Steak" src={steak_img_url} />
      <li>Pizza</li>
      <img alt="Pizza" src={pizza_img_url} />
      <li>Sushi</li>
      <img alt="Sushi" src={sushi_img_url} />
    </ul>
  </div>,
  document.getElementById("root")
);
