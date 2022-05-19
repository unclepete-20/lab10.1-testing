/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import "./Calculator.sass"
import { evaluate } from "mathjs"
import Operations from "./Operations.jsx"

export default function Calculator() {
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  const inputFuncion = (data) => {
    if (data === "AC") {
      setResult("")
    } else if (data === "=") {
      setOperator("=")
      if (result.length > 10) {
        setResult("ERROR")
      } else {
        setResult(evaluate(result))
      }
    } else if (operator === "=") {
        setResult(data)
        setOperator("")
      } else {
        setResult(result + data)
      }
  }

  return (
    <div className="calculator-shadow">
      <div className="calculator-container">
      <div className="calculator-front">
        <div className="calculator-header">
          <div className="calculator-header-title">
            <div className="text-header-one">CASIO</div>
            <div className="text-header-two">fx-991LA X</div>
            <div className="text-header-three">CLASSWIZ</div>
          </div>
          <div className="solar-panel" />
        </div>
        <input maxLength={10} type="text" className="calculator-display" defaultValue={result} />
        <div className="calculator-keyboard">
          <Operations funcion={inputFuncion} />
        </div>
      </div>
      </div>
    </div>
  )
}
