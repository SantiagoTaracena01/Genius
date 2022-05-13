import React from "react"
import Search from "../images/icons/search.png"
import "../styles/header.sass"

const Header = ({ logo }) => (
  <header className="header">
    <div className="header-input">
      <span>Search lyrics & more</span>
      <img src={Search} alt="Lupa de búsqueda" />
    </div>
    <img className="logo" src={logo} alt="Genius' logo" />
    <div className="account-options">
      <span className="account-option">SIGN UP</span>
      <span className="account-option">SIGN IN</span>
    </div>
  </header>
)

export default Header
