import React from "react"
import "../styles/navbar.sass"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="links-container">
        <div className="link-container"><a className="link">FEATURED</a></div>
        <div className="link-container"><a className="link">CHARTS</a></div>
        <div className="link-container"><a className="link">VIDEOS</a></div>
        <div className="link-container"><a className="link">PROMOTE YOUR MUSIC</a></div>
        <div className="link-container"><a className="link">SOCIAL MEDIA</a></div>
      </div>
    </nav>
  )
}

export default Navbar