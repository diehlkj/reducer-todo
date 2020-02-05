export const initialState = [
    {
        name: 'Learn about reducers',
        complete: false,
        id: 3820467589
    }
];
  
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: Date.now(),
                    name: action.payload,
                    complete: false
                }
            ]
        case 'TOGGLE_COMPLETED':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, complete: !todo.complete }
                    : todo
            )

        case 'REMOVE_TODO':
            let completedTodo = state.filter(
                todo=> todo.complete === false
            );
            return completedTodo
        default:
            return state
    }
    
};
  