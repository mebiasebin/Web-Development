import React, { useState } from 'react';
import './todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, inputValue]);
    setInputValue('');
  }

  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div className='whole'>
      <div className='add'>
        <h1>Todo List</h1>
        <form>
          <input
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Enter a new todo'
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
      <div className='view'>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className='list'>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
