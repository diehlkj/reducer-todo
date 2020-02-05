import React, { useReducer } from 'react';
import { initialState, todoReducer } from "../reducers";

const ToDoItem = props => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleCompleted = task => {

    dispatch({ type: "TOGGLE_COMPLETED"});
    console.log(state, "from toggle complete handler");
  };

  return (
    <div>
      <h2
        className={state.completed ? "task" : state}
        state={state}
        onClick={toggleCompleted}
      >
        {props.task.item}
      </h2>
    </div>
  );
};
export default ToDoItem;