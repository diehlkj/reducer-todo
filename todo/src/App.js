import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from "./reducers";
import ToDoItem from "./components/TodoItem";
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");


  // Handle text input changes ==================================
  const handleChanges = e => {
    setNewTodo(e.target.value);
  };


  // dispatch ADD_TODO with payload: newTodo ==================================
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
  }; 
  


  // dispatch TOGGLE_COMPLETED and pass into the todo item ==================================
    const toggleCompleted = (id) => {
        dispatch({ type: 'TOGGLE_COMPLETED', id: id});
    };


  // dispatch REMOVE_TODO? Will think about this one last...  ==================================
  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE_TODO" });
  };


  return (
    <div>
      {state.map(todo => 
          <ToDoItem 

          key={todo.id}
          name={todo.name}
          state={state}
          complete={todo.complete}
          todo={todo}
          toggleCompleted={toggleCompleted}
          />
      )}
      <form>
        <input type="text" name="newTodo" value={newTodo} onChange={handleChanges}/>
        <button onClick={handleSubmit}>Add ToDo</button>
        <button onClick={handleClear}>Remove Complete</button>
      </form>
    </div>
  );
};
  // return (
  //     <div>
  //         {state.map(todo => 
  //             <ToDoItem
  //             key={todo.id}
  //             name={todo.name}
  //             state={state}
  //             complete={todo.complete}
  //             todo={todo}
  //             toggleCompleted={toggleCompleted}  
  //             />
  //         )}
  //         <input
  //         className="todoInput"
  //         type="text"
  //         name="newTodoText"
  //         value={newTodo}
  //         onChange={handleChanges}
  //         />
  //         <button onClick={handleSubmit}>Add</button>
  //         <button onClick={handleClear}>Remove Completed Items</button>
  //     </div>
  // )
// };
export default App;
