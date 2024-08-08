import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = [
  //   "Lentils",
  //   "Green Vegetables",
  //   "Fruits",
  //   "Protiens",
  //   "Vitamins",
  // ];
  let foodItems = [];

  // if else operator
  // if(foodItems.length === 0){
  //   return <h3>I am still hungry.</h3>
  // }
  
  return (
    <>
      <h1>Healthy Food</h1>      
      {/* ternery operator */}
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
      {/* logical operator */}
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
