import React from "react"
import "../styles/initial-post.sass"

const InitialPost = ({ title, description, generalInfo, image }) => {
  return (
    <div className="initial-post">
      <div className="initial-post-info">
        <h2 className="news-span"><span>NEWS</span></h2>
        <h1 className="title">{title}</h1>
        <h4 className="description">{description}</h4>
        <p>{generalInfo}</p>
      </div>
      <p>{image}</p>
    </div>
  )
}

export default InitialPost