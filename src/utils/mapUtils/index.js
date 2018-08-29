export const getBounds = markers => {
  if (!markers || !Array.isArray(markers) || markers.length === 0) {
    return null
  }
  let bounds = [[...markers[0]], [...markers[0]]]
  markers.forEach(m => {
    bounds[0][0] = Math.min(bounds[0][0], m[0])
    bounds[0][1] = Math.min(bounds[0][1], m[1])
    bounds[1][0] = Math.max(bounds[1][0], m[0])
    bounds[1][1] = Math.max(bounds[1][1], m[1])
  })
  return bounds
}

export const addPadding = (bounds, percent) => {
  //Not implemented yet.
  //Might be needed to make sure marker's popup are not cropped on landscape display.
  //Check if the react-leaflet Map boundsOptions can do the job
  return bounds
}
