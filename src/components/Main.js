import React from "react"
import InitialPost from "./InitialPost"
import MidNextPost from "./MidNextPost"
import KendrickImage from "../images/kendrick-the-heart-part-5.jpg"
import NLEChoppaImage from "../images/nle-choppa.jpg"
import WhiteImage from "../images/white-background.jpg"
import BadBunnyImage from "../images/bad-bunny-un-verano-sin-ti.jpg"
import JackHarlowImage from "../images/jack-harlow-album-bg.jpg"
import "../styles/main.sass"

const nextPosts = [
  {
    news: "NEWS",
    title: "Youtube Star Kai Cenat Links With NLE Choppa On New Song 'Bustdown Rollie Avalanche'",
    generalInfo: "by Leah Degrazia / May 8 2022",
    image: NLEChoppaImage,
  }, {
    news: "",
    title: "",
    generalInfo: "",
    image: WhiteImage,
  }, {
    news: "NEWS",
    title: "Read All The Lyrics To Bad Bunny's New Album 'Un Verano Sin Ti'",
    generalInfo: "by Leah Degrazia / May 6 2022",
    image: BadBunnyImage,
  }, {
    news: "NEWS",
    title: "Read All The Lyrics To Jack Harlow's New Album 'Come Home The Kids Miss You'",
    generalInfo: "by Leah Degrazia / May 6 2022",
    image: JackHarlowImage,
  },
]

const Main = () => (
  <div className="main">
    <InitialPost
      title='Kendrick Lamar Gives Us Plenty To Think About With New Song "The Heart Part 5"'
      description="The track arrives days ahead of Kendrick's fifth album."
      generalInfo="by Ken Partridge / May 9 2022"
      image={KendrickImage}
    />
    <div className="next-posts">
      {nextPosts.map((post) => (
        <MidNextPost
          news={post.news}
          title={post.title}
          generalInfo={post.generalInfo}
          image={post.image}
        />
      ))}
    </div>
    <div className="charts">
      <h1 className="charts-title">CHARTS</h1>
    </div>
  </div>
)

export default Main
