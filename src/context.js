import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    {title: "Buy dog food", completed: true},
    {title: "Pickup dog poo", completed: false},
    {title: "Wash car", completed: false},
    {title: "Pickup post", completed: false},
  ]
});

export default Store;