import React from "react"
import "../styles/button.sass"

const Button = ({ positive, text }) => (
  <button className={(positive) ? "button positive-button" : "button negative-button"}>
    {text}
  </button>
)

export default Button
