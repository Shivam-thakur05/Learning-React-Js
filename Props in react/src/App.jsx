import React from "react";
import ErrorMsg from "./component/ErrorMsg";
import FoodItem from "./component/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import ButtonInput from "./component/ButtonInput";
import "./App.css";

function App() {
  let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Protiens",
    "Vitamins",
  ];
  const HandlingonChange = (event) => {
    console.log(event.target.value)
}

  return (
    <Container>
      <h1 className="kg-heading">Healthy Food</h1>
      <ButtonInput HandlingonChange = {HandlingonChange}></ButtonInput>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItem items={foodItems}></FoodItem>
    </Container>
  );
}
export default App;
