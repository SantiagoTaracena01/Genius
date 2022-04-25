import React from "react"
import Header from "./Header.js"
import Navbar from "./Navbar.js"

const App = ({ logo }) => {
  return (
    <div>
      <Header logo={logo} />
      <Navbar />
    </div>
  )
}

export default App