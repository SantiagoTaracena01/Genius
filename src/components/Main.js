import React from "react"

import InitialPost from "./InitialPost"
import MidNextPost from "./MidNextPost"
import Dropdown from "./Dropdown"
import ChartSong from "./ChartSong"
import Button from "./Button"
import VideoShowcase from "./VideoShowcase"
import LatestNewsGrid from "./LatestNewsGrid"
import CommunityMembers from "./CommunityMembers"

import KendrickImage from "../images/kendrick-the-heart-part-5.jpg"
import NLEChoppaImage from "../images/nle-choppa.jpg"
import WhiteImage from "../images/white-background.jpg"
import BadBunnyImage from "../images/bad-bunny-un-verano-sin-ti.jpg"
import JackHarlowImage from "../images/jack-harlow-album-bg.jpg"

import TheHeartPart5 from "../images/the-heart-part-5.jpg"
import ComeHomeTheKidsMissYou from "../images/come-home-the-kids-miss-you.jpg"
import MeMyselfAndI from "../images/me-myself-and-i.jpg"
import INeverLikedYou from "../images/i-never-liked-you.jpg"
import UnVeranoSinTi from "../images/un-verano-sin-ti.jpg"
import DriversLicense from "../images/drivers-license.jpg"
import WannaBeStartinSomethin from "../images/wanna-be-startin-somethin.jpg"

import Fire from "../images/icons/fire.png"
import Eye from "../images/icons/eye.png"

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

const chartSongs = [
  {
    cover: TheHeartPart5,
    title: "The Heart Part 5",
    artist: "Kendrick Lamar",
    fire: Fire,
    iq: "271",
    eye: Eye,
    views: "920.5K",
  }, {
    cover: ComeHomeTheKidsMissYou,
    title: "Dua Lipa",
    artist: "Jack Harlow",
    fire: false,
    iq: "",
    eye: Eye,
    views: "258.9K",
  }, {
    cover: MeMyselfAndI,
    title: "Me Myself & I",
    artist: "5 Seconds of Summer",
    fire: false,
    iq: "",
    eye: Eye,
    views: "35.4K",
  }, {
    cover: INeverLikedYou,
    title: "WAIT FOR U",
    artist: "Future",
    fire: false,
    iq: "",
    eye: Eye,
    views: "344.3K",
  }, {
    cover: UnVeranoSinTi,
    title: "Tití Me Preguntó",
    artist: "Bad Bunny",
    fire: false,
    iq: "",
    eye: Eye,
    views: "213K",
  }, {
    cover: ComeHomeTheKidsMissYou,
    title: "Curchill Downs",
    artist: "Jack Harlow",
    fire: false,
    iq: "",
    eye: Eye,
    views: "187.1K",
  }, {
    cover: UnVeranoSinTi,
    title: "Después de la Playa",
    artist: "Bad Bunny",
    fire: false,
    iq: "",
    eye: Eye,
    views: "62.3K",
  }, {
    cover: UnVeranoSinTi,
    title: "Andrea",
    artist: "Bad Bunny",
    fire: false,
    iq: "",
    eye: Eye,
    views: "207.2K",
  }, {
    cover: DriversLicense,
    title: "drivers license",
    artist: "Olivia Rodrigo",
    fire: false,
    iq: "",
    eye: Eye,
    views: "3.7M",
  }, {
    cover: WannaBeStartinSomethin,
    title: "Wanna Be Startin' Somethin'",
    artist: "Michael Jackson",
    fire: false,
    iq: "",
    eye: Eye,
    views: "988.8K",
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
      <p className="charts-trending-title">TRENDING ON GENIUS</p>
      <Dropdown content="SONGS / ALL GENRES / TODAY" />
      {chartSongs.map((song, index) => (
        <ChartSong
          id={index + 1}
          cover={song.cover}
          title={song.title}
          artist={song.artist}
          fire={song.fire}
          iq={song.iq}
          eye={song.eye}
          views={song.views}
        />
      ))}
      <div className="positive-button-container">
        <Button
          positive
          text="LOAD MORE"
        />
      </div>
    </div>
    <div className="video-showcase-container">
      <VideoShowcase />
    </div>
    <h1 className="latest-title">LATEST</h1>
    <h4 className="most-recent-news-label">MOST RECENT NEWS</h4>
    <div className="latest-news-grid-container">
      <LatestNewsGrid />
    </div>
    <div className="positive-button-container">
      <Button
        positive
        text="LOAD MORE"
      />
    </div>
    <div className="community">
      <h1 className="community-title">COMMUNITY</h1>
      <div className="community-description-container">
        <p className="community-description">
          GENIUS&apos;S COMMUNITY OF CONTRIBUTORS POWERS THE WORLD&apos;S BIGGEST
          COLLECTION OF SONG LYRICS AND MUSICAL KNOWLEDGE
        </p>
      </div>
      <div className="community-buttons-container">
        <Button
          positive
          text="JOIN OUR COMMUNITY"
        />
        <Button
          positive
          text="LEARN HOW GENIUS WORKS"
        />
      </div>
      <CommunityMembers />
      <div className="positive-button-container">
        <Button
          positive
          text="LOAD MORE"
        />
      </div>
    </div>
  </div>
)

export default Main
