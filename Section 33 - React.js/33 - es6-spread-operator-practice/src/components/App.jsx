import React , {useState} from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s


function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);
  
  function handleInputChange(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addListItem(event) {
      event.preventDefault();
      setList([...list, inputText]);
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form" onSubmit={addListItem}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
        <div>
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
    </div>
  );
}

export default App;
