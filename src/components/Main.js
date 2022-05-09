import React from "react"
import InitialPost from "./InitialPost"
import "../styles/main.sass"

const Main = () => {
  return (
    <div className="main">
      <InitialPost 
        title='Kendrick Lamar Gives Us Plenty To Think About With New Song "The Heart Part 5"'
        description="The track arrives days ahead of Kendrick's fifth album."
        generalInfo="by Leah Degrazia / May 6 2022"
        image="0"
      />
    </div>
  )
}

export default Main