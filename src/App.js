import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function zero() {
    //0
    setValue(0);
  }

  function add() {
    //1
  }

  function subtract() {
    //2
  }

  function multiply() {
    //3
  }

  function divide() {
    //4
  }

  function remainder() {
    //5
  }

  function square() {
    //6
  }

  function cube() {
    //7
  }

  function root() {
    //8
  }

  function inverse() {
    //9
  }

  function changeSigns() {
    setValue(-1 * value);
    //10
  }

  function random() {
    //11
  }

  function setNumber(event) {
    if (!isNaN(event.target.value)) {
      setValue(event.target.value);
    }
  }

  return (
    <div>
      <div className="App">
        <header className="header">
          <input type="text" value={value} onChange={setNumber}></input>
        </header>
        <div className="grid-container">
          <button onClick={zero}>Set To 0</button>
          <button onClick={add}>Add 1</button>
          <button onClick={subtract}>Subtract 1</button>
          <button onClick={multiply}>Multiply By 2</button>
          <button onClick={divide}>Divide By 2</button>
          <button onClick={remainder}>Remainder of 2</button>
          <button onClick={square}>Square The Number</button>
          <button onClick={cube}>Cube The Number</button>
          <button onClick={root}>Square Root The Number</button>
          <button onClick={inverse}>Get The Inverse</button>
          <button onClick={changeSigns}>Change The Sign</button>
          <button onClick={random}>Set To Random Number 0-100</button>
        </div>
      </div>
      <div className="Footer">
        <h1>Created by Tyler Kerch</h1>
      </div>
    </div>
  );
}

export default App;
