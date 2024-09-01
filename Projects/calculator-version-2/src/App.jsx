import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C') {
      setCalVal("");
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }


  return (
    <div className={style.calculator}>
      <Display DisplayVal={calVal}></Display>
      <ButtonContainer
        onButtonClick={onButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
