
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
    console.log(action.payload)
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.title === action.payload.title ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
}

export default reducer;