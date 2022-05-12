import React from "react"
import "../styles/header.sass"

const Header = ({ logo }) => (
  <header className="header">
    <input className="search-input" type="text" placeholder="Search Lyrics & More" />
    <img className="logo" src={logo} alt="Genius' logo" />
    <div className="account-options">
      <span className="account-option">SIGN UP</span>
      <span className="account-option">SIGN IN</span>
    </div>
  </header>
)

export default Header
