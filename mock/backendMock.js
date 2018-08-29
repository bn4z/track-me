export class backendMock {
  constructor(onReceiveNotification) {
    this.onReceiveNotification = onReceiveNotification
    this.timeoutHandle = null
  }
  simulate = (rank = 0) => {
    for (const element of mockedPositions) {
      //console.log(rank, getMockedPosition(element, rank))
      if (typeof this.onReceiveNotification === "function") {
        const mockedEventValue = {
          id: element.id,
          position: getMockedPosition(element, rank)
        }
        this.onReceiveNotification(mockedEventValue)
      }
    }

    //Don't continue simulation for days :)
    if (rank > 30) return

    this.timeoutHandle = setTimeout(() => {
      this.simulate(rank + 1)
    }, 2000)
  }

  stopSimulation = () => {
    clearTimeout(this.timeoutHandle)
    //console.log("Simulation stopped")
  }
}

const getMockedPosition = (element, rank) =>
  element.positions[rank % element.positions.length]

const mockedPositions = [
  {
    id: "bob",
    positions: [
      [43.584206, 7.104536],
      [43.583203, 7.108795],
      [43.580459, 7.111381]
    ]
  },
  {
    id: "bill",
    positions: [
      [43.642489, 7.005162],
      [43.64168, 6.998387],
      [43.641139, 6.989903]
    ]
  }
]
