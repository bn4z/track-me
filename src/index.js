import React from "react"
import ReactDOM from "react-dom"
import Application from "./components/Application"

function App() {
  return <Application />
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
