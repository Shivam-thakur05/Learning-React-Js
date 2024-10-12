import React from "react";
import { useState } from "react";
import AddToDo from "./component/AddToDo";
import Appname from "./component/Appname";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./App.css";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item Added : ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [...todoItems,{name : itemName, dueDate : itemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo container">
      <Appname />
      <AddToDo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem} />
      {todoItems.length == 0 && <WelcomeMessage /> }
      
    </center>
  );
}

export default App;
