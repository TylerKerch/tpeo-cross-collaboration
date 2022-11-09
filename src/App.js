import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  function zero() {
    setValue(0);
  }

  function add() {
    setValue(value + 1);
    //1
  }

  function subtract() {
    setValue(value - 1);
  }

  function multiply() {
    //3
    setValue(value * 2);
  }

  function divide() {
    //4
    //Zhuoli
    setValue(value / 2);
  }

  function remainder() {
    //Justin Sasek
    setValue(value % 2);
    //5
  }

  function square() {
    //6: Rohan Patel
    setValue(value * value);
  }

  function cube() {
    //7
    setValue(Math.pow(value, 3));
  }

  function root() {
    //8
    //Aarushi
    setValue(Math.sqrt(value));
  }

  function inverse() {
    //9
    setValue(1 / value);
  }

  function changeSigns() {
    //10 - Aaryan Sagar
    setValue(-1 * value);
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
        <h1>
          Created by Conny Cai, Rohan Patel, Aaryan Sagar, Nayeon Kim, Zhuoli
          Xie, Sarayu Chebbi, Vincent Do, Arushi, Emerald Zhang & Tyler Kerch
        </h1>
      </div>
    </div>
  );
}

export default App;
