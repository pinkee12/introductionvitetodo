import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]);
      setTodoInput('');
    }
  };

  return (
    <div>
      <h1 className='list'>  Todo List</h1>
      <input className='box'
        type="text"
        value={todoInput}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button className='button' onClick={handleAddTodo}>Add New Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

                                                                                                                              

