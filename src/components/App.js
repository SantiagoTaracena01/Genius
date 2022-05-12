import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Main from "./Main"
import "../styles/root.sass"

const App = ({ logo }) => (
  <div>
    <Header logo={logo} />
    <Navbar />
    <Main />
  </div>
)

export default App
