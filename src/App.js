import './App.css';
import React, { useState } from 'react';

function App() {

  const items [items, setItems] = useState([
    {name: 'Go to the shop', isComplete: false},
    {name: 'Buy socks', isComplete: false},
    {name: 'Get a cat', isComplete: false},
  ]);
  const [newItem, setNewItem] = useState("");

  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
      </ul>

      <form>
      </form>

    </div>
  );
}

export default App;
