import React from "react";
import AddToDo from "./component/AddToDo";
import Appname from "./component/Appname";
import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
  ];

  return (
    <center className="todo container">
      <Appname />
      <AddToDo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
