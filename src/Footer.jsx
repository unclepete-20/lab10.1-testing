/* eslint-disable prettier/prettier */
import React from "react"
import "./Footer.sass"
import TypeAnimation from "react-type-animation"

export default function Footer() {
  return (
    <div className="Footer">
      <TypeAnimation
        cursor
        sequence={["Pedro Pablo Arriola Jimenez (20188) 💻", 1000, " "]}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  )
}
