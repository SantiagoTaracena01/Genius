import React from "react"
import "../styles/dropdown.sass"

const Dropdown = ({ content }) => (
  <div className="dropdown">
    <div className="dropdown-content">
      {content}
    </div>
  </div>
)

export default Dropdown
