/* eslint-disable prettier/prettier */
import React from "react"
import "./Button.sass"
import PropTypes from 'prop-types'

export default function Button(props) {
  const { value, handleClick } = props
  return (
    <div
      role="button"
      className="button-layout"
      onClick={() => {
        handleClick(value)
      }}
    >
      <button type="button" className="button-prop">{value}</button>
    </div>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
