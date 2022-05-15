import React from "react"
import "../styles/latest-news-element.sass"

const LatestNewsElement = ({
  category, image, title, info,
}) => (
  <div className="latest-news-element">
    <div className="latest-news-element-category">
      <h5 className="element-category"><span>{category}</span></h5>
    </div>
    <div className="latest-news-element-image">
      <img src={image} alt="Portada del artículo" />
    </div>
    <div className="latest-news-element-title">
      <h1>{title}</h1>
    </div>
    <div className="latest-news-element-info">
      <p>{info}</p>
    </div>
  </div>
)

export default LatestNewsElement
