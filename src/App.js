import './App.css';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {name: 'Go to the shop', isComplete: false},
    {name: 'Buy socks', isComplete: false},
    {name: 'Get a cat', isComplete: false},
  ]);
  const [newItem, setNewItem] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
      <li key = {index} className={item.isCompleted ? "completed" : "not-completed"}>
        <span> {item.name} </span>
        {item.isPurchased ? <span className='completed'> Completed! </span> :
        <button onClick={() => purchaseItem(index)}> Complete</button>} </li>
    )
    });
    
    const handleItemInput = (event) => {
      setNewItem(event.target.value)
    }
  
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
