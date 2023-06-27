import './App.css';
import React, { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: 'Go to the shop', priority: 'low', isCompleted: false},
    {name: 'Buy socks', priority: 'low', isCompleted: false},
    {name: 'Get a cat', priority: 'high', isCompleted: false},
  ]);
  const [newtask, setNewTask] = useState("");
  const [priority, setNewPriority] = useState('low');

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

    const handlePriorityChange = (event) => {
      setNewPriority(event.target.value);
    };

    const saveNewTask = (event) => {
      event.preventDefault();
      const copyTasks = [...tasks]
      copyTasks.push({name:newtask, priority: priority, isCompleted : false})
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
      <form onSubmit={saveNewTask}>
        <label htmlFor = 'new-task'> Add new task</label>
        <input id='new-task' type='text' value={newtask} onChange={handleTaskInput}></input>
        <input type='submit' value='Save New Task'/>
        
        <input type="radio" value="high" checked={priority === 'high'} onChange={handlePriorityChange} /> high
        <input type="radio" value="low" checked={priority === 'low'} onChange={handlePriorityChange} /> low
      </form>

      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
