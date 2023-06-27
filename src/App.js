import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: 'Go to the shop', isCompleted: false},
    {name: 'Buy socks', isCompleted: false},
    {name: 'Get a cat', isCompleted: false},
  ]);
  const [newtask, setNewTask] = useState("");

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key = {index} className={task.isCompleted ? "completed" : "not-completed"}>
        <span> {task.name} </span>
        {task.isCompleted ? <span className='completed'> Completed! </span> :
        <button onClick={() => completeTask(index)}> Complete</button>} </li>
    )
    });
    
    const handleTaskInput = (event) => {
      setNewTask(event.target.value)
    }

    const saveNewTask = (event) => {
      event.preventDefault();
      const copyTasks = [...tasks]
      copyTasks.push({name:newtask, isCompleted : false})
      setTasks(copyTasks)
      setNewTask("");
      
    }

    const completeTask = (index) => {
      const copyTasks = [...tasks]
      copyTasks[index].isCompleted = true;
      setTasks(copyTasks)
    }
  
  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {taskNodes}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor = 'new-task'> Add new task</label>
        <input id='new-task' type='text' value={newtask} onChange={handleTaskInput}></input>
        <input type='submit' value='Save New Task'/>
      
      </form>

    </div>
  );
}

export default App;
