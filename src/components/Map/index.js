import React, { Component, createRef } from "react"
import PropTypes from "prop-types"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

export default class TMMap extends Component {
  constructor(props) {
    super(props)
    this.mapRef = createRef()
  }

  state = {
    selfPosition: null
  }

  handleLocationFound = e => {
    const { onPositionChange } = this.props
    this.setState({
      hasLocation: true,
      selfPosition: e.latlng
    })
    if (typeof onPositionChange === "function") {
      onPositionChange(e.latlng)
    }
  }

  componentDidMount() {
    this.mapRef.current.leafletElement.locate()
  }

  render() {
    const { markers, ...other } = this.props
    return (
      <StyledMap
        center={this.state.selfPosition}
        innerRef={this.mapRef}
        onLocationfound={this.handleLocationFound}
        {...other}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers.map(m => (
          <Marker key={m.id} position={m.position}>
            <Popup>{m.id}</Popup>
          </Marker>
        ))}
        {this.state.selfPosition && (
          <Marker position={this.state.selfPosition} onClick={this.handleClick}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </StyledMap>
    )
  }
}

TMMap.propTypes = {
  onPositionChange: PropTypes.func,
  markers: PropTypes.arrayOf(PropTypes.node)
}

const StyledMap = styled(Map)`
  display: flex;
  width: 100%;
  min-height: 300px;
  flex: 1 1 auto;
`
