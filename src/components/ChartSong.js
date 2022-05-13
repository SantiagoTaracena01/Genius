import React from "react"
import "../styles/chart-song.sass"

const ChartSong = ({
  id, cover, title, artist, fire, iq, eye, views,
}) => (
  <div className="chart-song">
    <div className="chart-song-number">
      {id}
    </div>
    <div className="chart-song-album-image">
      <img src={cover} alt="Portada del álbum" />
    </div>
    <div className="chart-song-title">
      <h3>{title}</h3>
      <span>LYRICS</span>
    </div>
    <div className="chart-song-artist">
      <h3>{artist}</h3>
    </div>
    <div className="chart-song-trend">
      {(fire && iq)
        ? (
          <div className="chart-song-trend-info">
            <img src={fire} alt="Trending" />
            <span>{iq}</span>
          </div>
        )
        : null}
    </div>
    <div className="chart-song-views">
      <img src={eye} alt="Views" />
      <span>{views}</span>
    </div>
  </div>
)

export default ChartSong
