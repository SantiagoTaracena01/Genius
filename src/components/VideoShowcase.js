import React from "react"
import Button from "./Button"
import Giveon from "../images/giveon-genius.jpg"
import "../styles/video-showcase.sass"

const VideoShowcase = () => (
  <div className="video-showcase">
    <h1 className="video-showcase-title">VIDEOS</h1>
    <p className="video-showcase-genius-original">GENIUS ORIGINAL SERIES</p>
    <div className="video-showcase-container">
      <div className="video-showcase-content">
        <div className="video-showcase-content-image">
          <img src={Giveon} alt="Entrevista a Giveon." />
        </div>
        <div className="video-showcase-content-info-container">
          <div className="video-showcase-content-info">
            <h4>VERIFIED</h4>
            <h5>Giveon Breaks Down The Meaning &quot;Lie Again&quot;</h5>
            <p>Learn about the song&apos;s lyrics on the latest episode of &apos;Verified.&apos;</p>
            <p className="author-info">
              by ButterflyHoney /&nbsp;
              <span>May 11 2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="button-container">
      <Button
        positive={false}
        text="LOAD MORE"
      />
    </div>
  </div>
)

export default VideoShowcase
