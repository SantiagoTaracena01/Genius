import React from "react"
import Facebook from "../images/icons/facebook.png"
import Twitter from "../images/icons/twitter.png"
import Instagram from "../images/icons/instagram.png"
import Youtube from "../images/icons/youtube.png"
import "../styles/navbar.sass"

const Navbar = () => (
  <nav className="navbar">
    <div className="links-container">
      <div className="link-container"><span className="link">FEATURED</span></div>
      <div className="link-container"><span className="link">CHARTS</span></div>
      <div className="link-container"><span className="link">VIDEOS</span></div>
      <div className="link-container"><span className="link">PROMOTE YOUR MUSIC</span></div>
      <div className="link-container">
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
        <img src={Youtube} alt="Youtube" />
      </div>
    </div>
  </nav>
)

export default Navbar
