import React from "react"
import Member from "./Member"
import "../styles/community-members.sass"

import Boondocks from "../images/profile-pictures/the-boondocks.jpg"
import Undertaker from "../images/profile-pictures/undertaker.jpg"
import Pacman from "../images/profile-pictures/pacman.jpg"
import Pharell from "../images/profile-pictures/pharell.jpg"
import Deer from "../images/profile-pictures/deer.jpg"
import Beach from "../images/profile-pictures/beach.jpg"
import Bird from "../images/profile-pictures/bird.jpg"
import Girl from "../images/profile-pictures/girl.jpg"
import Jungle from "../images/profile-pictures/jungle.jpg"
import Siuuu from "../images/profile-pictures/siuuu.jpg"

const members = [
  {
    profilePicture: Boondocks,
    username: "SmashBeezy",
    category: "CONTRIBUTOR🔷",
    iq: "7,261",
  }, {
    profilePicture: Undertaker,
    username: "MCGAIDAR",
    category: "CONTRIBUTOR🔷",
    iq: "4,741",
  }, {
    profilePicture: Pacman,
    username: "Ferbinho",
    category: "MODERATOR⬜",
    iq: "3,126",
  }, {
    profilePicture: Pharell,
    username: "OsigbemheEbounoluwaBraimah",
    category: "CONTRIBUTOR🔷",
    iq: "2,284",
  }, {
    profilePicture: Deer,
    username: "BrStickings",
    category: "CONTRIBUTOR🔷",
    iq: "2,279",
  }, {
    profilePicture: Beach,
    username: "BuhHromu",
    category: "CONTRIBUTOR🔷",
    iq: "2,208",
  }, {
    profilePicture: Bird,
    username: "alionheart",
    category: "EDITOR⭐",
    iq: "2,131",
  }, {
    profilePicture: Girl,
    username: "aqua1000000",
    category: "CONTRIBUTOR🔷",
    iq: "2,063",
  }, {
    profilePicture: Jungle,
    username: "ahayax",
    category: "EDITOR⭐",
    iq: "1,903",
  }, {
    profilePicture: Siuuu,
    username: "takuu",
    category: "EDITOR⭐",
    iq: "1,838",
  },
]

const CommunityMembers = () => (
  <div className="community-members-table">
    <div className="community-members-table-header">
      <div className="community-members-table-rank">
        <p>RANK</p>
      </div>
      <div className="community-members-table-top">
        <p>TOP SCHOLARS TODAY</p>
      </div>
      <div className="community-members-table-iq">
        <p>IQ EARNED TODAY</p>
      </div>
    </div>
    {members.map((member, index) => (
      <Member
        rank={index + 1}
        profilePicture={member.profilePicture}
        username={member.username}
        category={member.category}
        iq={member.iq}
      />
    ))}
  </div>
)

export default CommunityMembers
