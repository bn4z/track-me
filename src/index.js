import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import Map from "./components/Map"

function App() {
  return (
    <Application>
      <Toolbar>Track Me!</Toolbar>
      <Map />
    </Application>
  )
}

const Application = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const Toolbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 0.3em;
`

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
