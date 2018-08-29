import { getBounds } from "."

const MARKERS = [[1, 1], [4, 4], [2, 2], [3, 3]]
const BOUNDS = [[1, 1], [4, 4]]

test("getBounds returns null when parameter isn't provided", () => {
  expect(getBounds()).toBe(null)
})

test("getBounds returns null when parameter is an empty array", () => {
  expect(getBounds([])).toBe(null)
})

test("getBounds returns bounding rectangle", () => {
  expect(getBounds(MARKERS)).toEqual(BOUNDS)
})
