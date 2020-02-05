import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "./reducers";
import TodoItem from "./components/TodoItem";
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  // Handle text input changes
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  console.log('State:::::::: ', state);

  // dispatch ADD_TODO with payload: newTodo
  const handleSubmit = e => {
    e.preventDefault();
    const newPayload = {
      item: newTodo,
      completed: true,
      id: Date.now()
    };
    console.log('src / App.js > App() > handleSubmit() > newTodo ', newPayload);
    dispatch({ type: "ADD_TODO", payload: newPayload });
    console.log('src / App.js > App() > handleSubmit() > state ', state);
  };

  // dispatch REMOVE_TODO? Will think about this one last... 
  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE_TODO" });
    console.log("handleClear: ", state);
  };
  return (
    <div>

      <form>
        <input type="text" name="newTodo" value={newTodo} onChange={handleChanges}/>
        <button onClick={handleSubmit}>Add ToDo</button>
        <button onClick={handleClear}>Remove Complete</button>
      </form>
      

      {state.map((todo) => {
        console.log("todo item name: ", todo.item, " todo: ", todo);
        return (
          <TodoItem key={todo.id} task={todo}/>
        );
      })}
    </div>
  );
}

export default App;
