import './App.css';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    {name: 'Go to the shop', isCompleted: false},
    {name: 'Buy socks', isCompleted: false},
    {name: 'Get a cat', isCompleted: false},
  ]);
  const [newItem, setNewTask] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
      <li key = {index} className={item.isCompleted ? "completed" : "not-completed"}>
        <span> {item.name} </span>
        {item.isCompleted ? <span className='completed'> Completed! </span> :
        <button onClick={() => completeTask(index)}> Complete</button>} </li>
    )
    });
    
    const handleItemInput = (event) => {
      setNewTask(event.target.value)
    }

  
  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {itemNodes}
      </ul>

      <form onSubmit={saveNewTask}>
      
      </form>

    </div>
  );
}

export default App;
