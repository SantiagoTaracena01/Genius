import React from "react"
import "../styles/navbar.sass"

const Navbar = () => (
  <nav className="navbar">
    <div className="links-container">
      <div className="link-container"><span className="link">FEATURED</span></div>
      <div className="link-container"><span className="link">CHARTS</span></div>
      <div className="link-container"><span className="link">VIDEOS</span></div>
      <div className="link-container"><span className="link">PROMOTE YOUR MUSIC</span></div>
      <div className="link-container"><span className="link">SOCIAL MEDIA</span></div>
    </div>
  </nav>
)

export default Navbar
