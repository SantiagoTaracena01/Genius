import React from "react"
import "../styles/member.sass"

const Member = ({
  rank, profilePicture, username, category, iq,
}) => (
  <div className="member">
    <div className="member-rank-container">
      {rank}
    </div>
    <div className="member-profile-picture-container">
      <img src={profilePicture} alt="Foto de perfil del usuario" />
    </div>
    <div className="member-info-container">
      <div className="member-username-container">
        {username}
      </div>
      <div className="member-role-container">
        {category}
      </div>
    </div>
    <div className="member-iq-container">
      {iq}
    </div>
  </div>
)

export default Member
