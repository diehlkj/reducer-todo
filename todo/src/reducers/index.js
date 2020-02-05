export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3820467589
    },
    {
        item: 'Go get gas',
        completed: false,
        id: 9822987589
    }
];
  
export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                action.payload,
                ...state
            ];
        case "TOGGLE_COMPLETED":
            return { ...state, completed: !state.completed };
        case "REMOVE_TODO":
            let completedTodo = state.filter(
                todo => todo.completed === false
              );
            return completedTodo
      default:
        return state;
    }
};
  