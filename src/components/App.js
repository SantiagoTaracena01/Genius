import React from "react"
import Header from "./Header.js"
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import "../styles/root.sass"

const App = ({ logo }) => {
  return (
    <div>
      <Header logo={logo} />
      <Navbar />
      <Main />
    </div>
  )
}

export default App