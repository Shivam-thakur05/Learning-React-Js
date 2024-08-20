import React from "react";
import ErrorMsg from "./component/ErrorMsg";
import FoodItem from "./component/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Protiens",
    "Vitamins",
  ];
  return (
    <>
      <h1 className="kg-heading">Healthy Food</h1>  
      <ErrorMsg items = {foodItems}></ErrorMsg>
      <FoodItem items = {foodItems}></FoodItem>
    </>
  );
}
export default App;
