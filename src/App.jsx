import React from "react";
import "./App.sass";
import Header from "./Header.jsx";
import Calculator from "./Calculator.jsx";

function App() {

  const inputFuncion = data_from_child => {
    console.log(data_from_child)
  }

  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
