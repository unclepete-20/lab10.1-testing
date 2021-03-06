/* eslint-disable prettier/prettier */
import React from "react"
import "./Header.sass"
import TypeAnimation from "react-type-animation"

export default function Header() {
  return (
    <div className="Header">
      <TypeAnimation
        cursor
        sequence={["Calculadora Casio ClassWiz fx-991LA X 🧮", 5000, " "]}
        wrapper="h1"
        repeat={Infinity}
      />
    </div>
  )
}
