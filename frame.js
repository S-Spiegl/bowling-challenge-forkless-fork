const { sum } = require("lodash");
 
class Frame {
  constructor() {
    this.rolls = []
  }
  
  addRoll(pins) {
    this.rolls.push(pins)
  }

  score() {
    return sum(this.rolls)
  }

  strike() {
    return this.rolls[0] === 10
    //equivalent to return true if this.rolls[0] === 10
  }

  spare() {
    return sum(this.rolls) === 10 && this.rolls.length === 2
  }
}

module.exports = Frame;