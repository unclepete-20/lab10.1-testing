/* eslint-disable prettier/prettier */
import React from "react"
import "./Operations.sass"
import PropTypes from 'prop-types'
import Button from "./Button.jsx"

export default function Operations(props) {
  const { funcion } = props
  return (
    <div className="operations">
      <Button value="AC" handleClick={funcion} />
      <Button value="+/-" handleClick={funcion} />
      <Button value="%" handleClick={funcion} />
      <Button value="/" handleClick={funcion} />
      <Button value="7" handleClick={funcion} />
      <Button value="8" handleClick={funcion} />
      <Button value="9" handleClick={funcion} />
      <Button value="*" handleClick={funcion} />
      <Button value="4" handleClick={funcion} />
      <Button value="5" handleClick={funcion} />
      <Button value="6" handleClick={funcion} />
      <Button value="-" handleClick={funcion} />
      <Button value="1" handleClick={funcion} />
      <Button value="2" handleClick={funcion} />
      <Button value="3" handleClick={funcion} />
      <Button value="+" handleClick={funcion} />
      <Button value="0" handleClick={funcion} />
      <Button value="." handleClick={funcion} />
      <Button value="=" handleClick={funcion} />
    </div>
  )
}

Operations.propTypes = {
    funcion: PropTypes.func.isRequired
}
