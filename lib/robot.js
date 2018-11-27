const directions = ["north", "south", "east", "west"]

class Robot {

	constructor() {
    this.coordinates = [0, 0]
    this.bearing = "north"
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(bearing) {
    if (directions.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(orders) {
    this.coordinates = [orders.x, orders.y]
    this.bearing = orders.direction
  }

  turnRight() {
    if (this.bearing === "north") {
      this.bearing = "east"
    } else if (this.bearing === "east") {
      this.bearing = "south"
    } else if (this.bearing === "south") {
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.bearing = "west"
    } else if (this.bearing === "east") {
      this.bearing = "north"
    } else if (this.bearing === "south") {
      this.bearing = "east"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++
    } else if (this.bearing === "east") {
      this.coordinates[0]++
    } else if (this.bearing === "south") {
      this.coordinates[1]--
    } else if (this.bearing === "west") {
      this.coordinates[0]--
    }
  }

  translateInstructions(instructionString) {
    let instructionArr = instructionString.split("")
    instructionArr.forEach(
      function(order) {
        if (order === "L"){
          this.turnLeft()
        } else if (order === "R") {
          this.turnRight()
        } else if (order === "A") {
          this.advance()
        }
      }.bind(this)
    )
  }
}
