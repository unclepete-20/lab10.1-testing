/* eslint-disable prettier/prettier */
import React from "react"
import { render } from "@testing-library/react"
import { evaluate } from "mathjs"
import Calculator from "../Calculator.jsx"


// Esta funcion es utilizada en el modulo de Calculator.jsx (Parte logica de la calculadora)
// Esta funcion se encarga de manejar los eventos de los botones de la calculadora
// Es importante mencionar que se adaptó la funcion para poder realizar los test pertienentes
const inputFuncion = (data) => {
    const setOperator = "="
    let setResult = data

    if (data === "AC") {
        setResult = ""
        
    } else if (setOperator === "=") {
        if (evaluate(data).toString().length > 10) {
            setResult = "ERROR"
        } else {
            setResult = evaluate(setResult)
        }
    }

    return setResult
}


test("When AC is clicked, result should be empty", () => {
    const result = inputFuncion("AC")
    expect(result).toBe("")
})

test("Multiple operations to get a result", () => {
    const result = inputFuncion("82+12*2")
    expect(result).toBe(106)
})

test("Module operation function should function correctly", () => {
    const result = inputFuncion("2%1")
    expect(result).toBe(0)
})

test("Float type numbers should be operated with no problem", () => {
    const result = inputFuncion("2.5+2.5")
    expect(result).toBe(5)
})

test("When result is greater than 10 digits, it should show an error", () => {
    const result = inputFuncion("7744226*12478963")
    expect(result).toBe("ERROR")
})

it("Calculator renders without crashing", () => {
  render(<Calculator />)
})