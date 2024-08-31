import React, { useState } from "react";
import ErrorMsg from "./component/ErrorMsg";
import FoodItem from "./component/FoodItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import ButtonInput from "./component/ButtonInput";
import "./App.css";

function App() {

  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Lentils",
    "Green Vegetables",
    "Fruits",
    "Protiens",
    "Vitamins",
  ])

  const onKeyDown = (event) => {

    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      // console.log("Food value is : " + newFoodItem);
    }
    setTextState(event.target.value);
  };

  /*
  let textStateArr = useState("food Item entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  //after doing destructuring
  // let [textToShow, setTextState] = useState("Food waste"); */


  

  return (
    <Container>
      <h1 className="kg-heading">Healthy Food</h1>
      <ButtonInput handleKeyDown={onKeyDown}></ButtonInput>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItem items={foodItems}></FoodItem>
    </Container>
  );
}
export default App;
