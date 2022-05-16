import React from "react"
import "../styles/footer.sass"

import Facebook from "../images/icons/facebook.png"
import Twitter from "../images/icons/twitter.png"
import Instagram from "../images/icons/instagram.png"
import Youtube from "../images/icons/youtube.png"

const Footer = () => (
  <footer className="footer">
    <div className="footer-info-container">
      <div className="footer-info-title">
        <h4 className="footer-info-title-label">
          Genius is the world&apos;s biggest
          collection of song lyrics and
          musical knowledge
        </h4>
        <div className="footer-info-social-media">
          <img src={Facebook} alt="Facebook logo" />
          <img src={Twitter} alt="Twitter logo" />
          <img src={Instagram} alt="Instagram logo" />
          <img src={Youtube} alt="Youtube logo" />
        </div>
      </div>
      <div className="footer-info-categories-one">
        <p>About Genius</p>
        <p>Contributor Guidelines</p>
        <p>Press</p>
        <p>Shop</p>
        <p>Advertise</p>
        <p>Event Space</p>
        <p>Privacy Policy</p>
        <h6>&copy; 2022 Genius Media Group Inc.</h6>
      </div>
      <div className="footer-info-categories-two">
        <p>Licensing</p>
        <p>Jobs</p>
        <p>Developers</p>
        <p>Copyright Policy</p>
        <p>Contact Us</p>
        <p>Sign In</p>
        <p>Do Not Sell My Personal Information</p>
        <h6>Terms of Use</h6>
      </div>
    </div>
    <div className="footer-breakline" />
    <div className="footer-songs-container">
      <div className="footer-songs-verified-artists">
        <p>VERIFIED ARTISTS</p>
        <p>&#9679;</p>
        <p>ALL ARTISTS:</p>
        <p>
          A&nbsp;&nbsp;B&nbsp;&nbsp;C&nbsp;&nbsp;D&nbsp;&nbsp;E&nbsp;&nbsp;F&nbsp;&nbsp;G&nbsp;&nbsp;H&nbsp;&nbsp;
          I&nbsp;&nbsp;J&nbsp;&nbsp;K&nbsp;&nbsp;L&nbsp;&nbsp;M&nbsp;&nbsp;N&nbsp;&nbsp;O&nbsp;&nbsp;P&nbsp;&nbsp;
          Q&nbsp;&nbsp;R&nbsp;&nbsp;S&nbsp;&nbsp;T&nbsp;&nbsp;U&nbsp;&nbsp;V&nbsp;&nbsp;W&nbsp;&nbsp;X&nbsp;&nbsp;
          Y&nbsp;&nbsp;Z&nbsp;&nbsp;#
        </p>
      </div>
      <div className="footer-songs-hot-songs">
        <p>HOT SONGS:</p>
        <p>N95</p>
        <p>&#9679;</p>
        <p>AUNTIE DIARIES</p>
        <p>&#9679;</p>
        <p>MOTHER I SOBER</p>
        <p>&#9679;</p>
        <p>WE CRY TOGETHER</p>
        <p>&#9679;</p>
        <p>FATHER TIME</p>
        <p>&#9679;</p>
        <p>VIEW ALL</p>
      </div>
    </div>
  </footer>
)

export default Footer
