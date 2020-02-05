import React from 'react';
import '../App.css';

const ToDoItem = ({ todo, toggleCompleted }) => {

  return (
      <h2      
        className={todo.complete ? "task" : ''}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo.name}
      </h2>
  );

};


export default ToDoItem;