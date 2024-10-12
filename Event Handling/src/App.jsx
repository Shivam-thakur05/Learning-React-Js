import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {

  const handleClick = () => {
    console.log("Button Clicked");
  };
  const handleMouseOver = () => {
    console.log("Mouse Over");
  };
  const handleonchange = (e) => {
    console.log(e.target.value);
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }
  const handleonDoubleClick = () => {
    console.log("Double Clicked");
  }
  const handleonFocus = () => {
    console.log("Focused");
  }
  const handleonBlur = () => {
    console.log("Blurred");
  }
  const handleonKeyDown = () => {
    console.log("Key Down");
  }
  const handleonKeyUp = () => {
    console.log("Key Up");
  }
  const handleonKeyPress = () => {
    console.log("Key Press");
  }

  return (
    <div>
      <button>Click me</button>
      <input type="text" onChange={handleonchange}/>
    </div>
  );
}

export default App;
