import React, { Component } from "react"
import styled from "styled-components"
import { backendMock } from "../../../mock/backendMock"
import Map from "../Map"
import { getBounds } from "../../utils/mapUtils"

export default class Application extends Component {
  constructor() {
    super()
    this.backend = new backendMock(this.handleNotification)
  }

  state = {
    markers: [],
    selfPosition: null
  }

  handleNotification = message => {
    this.setState(prevState => ({
      markers: [...prevState.markers.filter(m => m.id !== message.id), message]
    }))
  }

  handlePositionChange = postion => {
    this.setState({ selfPosition: postion })
  }

  componentDidMount() {
    //console.log("Simulation started")
    this.backend.simulate()
  }

  componentWillUnmount() {
    this.backend.stopSimulation()
  }

  render() {
    if (!this.state.markers[0]) {
      return <div />
    }
    const bounds = this.state.selfPosition
      ? getBounds([
          ...this.state.markers.map(m => m.position),
          [this.state.selfPosition.lat, this.state.selfPosition.lng]
        ])
      : getBounds(this.state.markers.map(m => m.position))

    return (
      <StyledApplication>
        <Toolbar>Track Me!</Toolbar>
        <Map
          markers={this.state.markers}
          bounds={bounds}
          onPositionChange={this.handlePositionChange}
        />
      </StyledApplication>
    )
  }
}

const StyledApplication = styled.div`
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
