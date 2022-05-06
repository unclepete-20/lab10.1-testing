import React from 'react'
import './Button.sass'

export default function Button(props) {
  return (
    <div className="button-layout" onClick={() => {props.handleClick(props.value)}}>
        <button className="button-prop">{props.value}</button>
    </div>
  )
}
