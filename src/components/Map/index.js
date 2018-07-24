import React, { Component, createRef } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

export default class SimpleExample extends Component {
  state = {
    latlng: [51.505, -0.09],
    // lat: 51.505,
    // lng: -0.09,
    zoom: 13
  }

  mapRef = createRef()

  handleClick = () => {
    console.log("handleClick")
    console.log("locate", this.mapRef.current)
    this.mapRef.current.leafletElement.locate()
  }

  handleLocationFound = e => {
    console.log("handleLocationFound", e)
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    })
  }

  componentDidMount() {}

  render() {
    console.log("render")
    //const position = [this.state.lat, this.state.lng]
    return (
      <Map
        style={{
          display: "flex",
          width: "100%",
          minHeight: "300px",
          flex: "1 1 auto"
        }}
        center={this.state.latlng}
        zoom={this.state.zoom}
        //ref={x => (this.mapRef = x)}
        ref={this.mapRef}
        onLocationfound={this.handleLocationFound}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={this.state.latlng} onClick={this.handleClick}>
          <Popup>You are here</Popup>
        </Marker>
      </Map>
    )
  }
}
const StyledMap = styled(Map)`
  display: flex;
  width: 100%;
  min-height: 300px;
  flex: 1 1 auto;
`
