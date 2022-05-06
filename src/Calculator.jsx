import React from "react";
import { useState } from "react";
import "./Calculator.sass";
import Operations from "./Operations.jsx";

export default function Calculator() {

    const [result, setResult] = useState("")

    const inputFuncion = data_from_child => {
      setResult(data_from_child)
    }

  return (
    <div className="calculator-container">
      <div className="calculator-front">
          <div className="calculator-header">
              <div className="calculator-header-title">
                  <div className="text-header-one">CASIO</div>
                  <div className="text-header-two">fx-991LA X</div>
                  <div className="text-header-three">CLASSWIZ</div>
              </div>
              <div className="solar-panel"></div>
          </div>
          <div className="calculator-display">{result}</div>
          <div className="calculator-keyboard">
              <Operations funcion={inputFuncion} />
          </div>
      </div>
    </div>
  )
}