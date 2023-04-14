import React, {useState} from "react";

const App = () => {
let [inputText, setInputText]= useState("");

const buttonClick=(event)=> {
  let clickedButton = event.target;
  let value = clickedButton.innerHTML;
  setInputText(inputText + value);
}
const answer = () => {

  let ans = eval(inputText)
  
  setInputText(ans)
}
const clear = () => {
setInputText ("")}
  return (
    <div>
      <input className="calculator-input" type="text" value={inputText} readOnly/>
    <div className="buttons-container">
      <button onClick={clear}>C</button>
      <button onClick={buttonClick}>/</button>
      <button onClick={buttonClick}>*</button>
      <button onClick={buttonClick}>-</button>
      <button onClick={buttonClick}>7</button>
      <button onClick={buttonClick}>8</button>
      <button onClick={buttonClick}>9</button>
      <button onClick={buttonClick}>+</button>
      <button onClick={buttonClick}>4</button>
      <button onClick={buttonClick}>5</button>
      <button onClick={buttonClick}>6</button>
      <button onClick={buttonClick}>1</button>
      <button onClick={buttonClick}>2</button>
      <button onClick={buttonClick}>3</button>
      <button onClick={answer}>=</button>
      <button onClick={buttonClick}>0</button>
      <button onClick={buttonClick}>.</button>
      <button> </button> 
      <button> </button> 
      <button> </button> 

    </div>
  </div>
    
  );
}

export default App;
