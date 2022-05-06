import React from "react"
import "./Operations.sass"
import Button from "./Button.jsx"

export default function Operations(props) {
  return (
    <div className="operations">
        <Button value="AC" handleClick={props.funcion} />
        <Button value="+/-" handleClick={props.funcion} />
        <Button value="%" handleClick={props.funcion} />
        <Button value="/" handleClick={props.funcion} />
        <Button value="7" handleClick={props.funcion} />
        <Button value="8" handleClick={props.funcion} />
        <Button value="9" handleClick={props.funcion} />
        <Button value="*" handleClick={props.funcion} />
        <Button value="4" handleClick={props.funcion} />
        <Button value="5" handleClick={props.funcion} />
        <Button value="6" handleClick={props.funcion} />
        <Button value="-" handleClick={props.funcion} />
        <Button value="1" handleClick={props.funcion} />
        <Button value="2" handleClick={props.funcion} />
        <Button value="3" handleClick={props.funcion} />
        <Button value="+" handleClick={props.funcion} />
        <Button value="0" handleClick={props.funcion} />
        <Button value="." handleClick={props.funcion} />
        <Button value="=" handleClick={props.funcion} />
    </div>
  )
}

