import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Card name="Shivam kumar">
        <h1>Shivam kumar</h1>
        <h3>Learning ReactJs</h3>
        <h3>From CodeHelp</h3>
      </Card>
      <Button increment={increment}>
        <p>Button Clicked : {count}</p>
      </Button>
    </>
  );
}

export default App;
