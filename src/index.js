import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import Genius from "./images/genius-logo.jpg"
import "./styles/root.sass"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App logo={Genius} />)
