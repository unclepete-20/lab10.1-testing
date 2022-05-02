import React from "react";
import { Component } from "react";
import "./Header.sass";
import TypeAnimation from "react-type-animation";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <TypeAnimation
        cursor={true}
        sequence={["Calculadora Casio ClassWiz fx-991LA X 🧮", 5000, " "]}
        wrapper="h1"
        repeat={Infinity}
        />
      </div>
    );
  }
}