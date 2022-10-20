import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  function TypeTodo(evn) {
    const newText = evn.target.value;
    return setTextInput(newText);
  }
  function HandleClick() {
    setTodoItems((prevItem) => {
      return [...prevItem, textInput];
    });
    setTextInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={TypeTodo} type="text" value={textInput} />
        <button onClick={HandleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todoItems.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
