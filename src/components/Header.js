import React from "react"
import "../styles/header.sass"

const Header = ({ logo }) => {
  return (
    <header className="header">
      <input className="search-input" type="text" placeholder="Search Lyrics & More" />
      <img className="logo" src={logo} alt="Genius' logo" />
      <div className="account-options">
        <a className="account-option">SIGN UP</a>
        <a className="account-option">SIGN IN</a>
      </div>
    </header>
  )
}

export default Header