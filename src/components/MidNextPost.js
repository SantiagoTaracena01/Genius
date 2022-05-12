import React from "react"
import "../styles/mid-next-post.sass"

const MidNextPost = ({
  news, title, generalInfo, image,
}) => (
  <div className="next-post">
    <div className="next-post-info">
      <h2 className="news-span"><span>{news}</span></h2>
      <h1 className="title">{title}</h1>
    </div>
    <div className="next-post-image-container">
      <p className="info">{generalInfo}</p>
      <img alt="Imagen relacionada a la noticia." className="initial-post-image" src={image} />
    </div>
  </div>
)

export default MidNextPost
