import React from "react"
import "../styles/initial-post.sass"

const InitialPost = ({
  title, description, generalInfo, image,
}) => (
  <div className="initial-post">
    <div className="initial-post-info">
      <h2 className="news-span"><span>NEWS</span></h2>
      <h1 className="title">{title}</h1>
      <h4 className="description">{description}</h4>
      <p className="info">{generalInfo}</p>
    </div>
    <div className="initial-post-image-container">
      <img alt="Nueva canción de Kendrick Lamar" className="initial-post-image" src={image} />
    </div>
  </div>
)

export default InitialPost
