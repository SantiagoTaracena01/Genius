import React from "react"
import LatestNewsElement from "./LatestNewsElement"
import "../styles/latest-news-grid.sass"

import MrMorale from "../images/mr-morale.jpg"
import DanceFever from "../images/dance-fever.jpg"
import FiveSOS from "../images/5sos.jpg"
import Giveon from "../images/giveon-genius.jpg"
import NLEChoppa from "../images/nle-choppa.jpg"
import TheHeart from "../images/kendrick-the-heart-part-5.jpg"
import CharliePuth from "../images/charlie-puth.jpg"
import LauraStylez from "../images/laura-stylez.jpg"
import AsapRocky from "../images/asap-rocky.jpg"
import BadBunny from "../images/bad-bunny.jpg"
import We from "../images/we.jpg"

const latestNews = [
  {
    category: "NEWS",
    image: MrMorale,
    title: "Kendrick Lamar Can't Buy Peace Of Mind On New Song 'United in Grief'",
    info: "by Ken Partridge / May 8 2022",
  }, {
    category: "NEWS",
    image: DanceFever,
    title: "Read All The Lyrics To Florence + The Machine's New Album 'Dance Fever'",
    info: "by Leah Degrazia / May 8 2022",
  }, {
    category: "NEWS",
    image: MrMorale,
    title: "Read All The Lyrics To Kendrick Lamar's New Album 'Mr. Morale & The Big Steppers'",
    info: "by Ken Partridge / May 8 2022",
  }, {
    category: "NEWS",
    image: FiveSOS,
    title: "5 Seconds Of Summer Face Loneliness and Regret On New Song 'Me Myself & I'",
    info: "by Ken Partridge / May 7 2022",
  }, {
    category: "VIDEO",
    image: Giveon,
    title: "Giveon Breaks Down The Meaning 'Lie Again'",
    info: "by ButterflyHoney / May 7 2022",
  }, {
    category: "NEWS",
    image: NLEChoppa,
    title: "YouTube Star Kai Cenat Links With NLE Choppa On New Song 'Bustdown Rollie Avalanche'",
    info: "by Leah Degrazia / May 7 202 2",
  }, {
    category: "NEWS",
    image: TheHeart,
    title: "Kendrick Lamar Gives Us Plenty To Think About With New Sont 'The Heart Part 5'",
    info: "by Ken Partridge / May 6 2022",
  }, {
    category: "VIDEO",
    image: CharliePuth,
    title: "Charlie Puth Breaks Down The Meaninf of 'That's Hilarious'",
    info: "by ButterflyHoney / May 6 2022",
  }, {
    category: "NEWS",
    image: LauraStylez,
    title: "Radio Personality Laura Stylez Talks Balancing Motherhood And Her Career",
    info: "by Leah Degrazia / May 6 2022",
  }, {
    category: "NEWS",
    image: AsapRocky,
    title: "A$AP Rocky Professes His Love For Rihanna In New Song 'D.M.B.'",
    info: "by Ken Partridge / May 6 2022",
  }, {
    category: "NEWS",
    image: BadBunny,
    title: "Read All The Lyrics To Bad Bunny's New Album 'Un Verano Sin Ti'",
    info: "by Leah Degrazia / May 6 2022",
  }, {
    category: "NEWS",
    image: We,
    title: "Read All The Lyrics To Arcade Fire's New Album 'WE'",
    info: "by Ken Partridge / May 6 2022",
  },
]

const LatestNewsGrid = () => (
  <div className="latest-news-grid">
    {latestNews.map((item) => (
      <div className="latest-news-grid-item">
        <LatestNewsElement
          category={item.category}
          image={item.image}
          title={item.title}
          info={item.info}
        />
      </div>
    ))}
  </div>
)

export default LatestNewsGrid
