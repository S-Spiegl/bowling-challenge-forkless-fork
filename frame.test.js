const Frame = require("./frame")

describe('Frame', () => {
  let frame;
  beforeEach(() => {
    frame = new Frame();
  });

  describe('.addRoll', () => {
    it('can receive a roll', () => {
      frame.addRoll(5)
    })

    it('can receive two rolls', () => {
      frame.addRoll(5),
      frame.addRoll(4);
      expect(frame.rolls.length).toBe(2)
    })
  })

  describe('.score', () => {
    it('calculates the score for an incomplete frame', () => {
      frame.addRoll(5);
      expect(frame.score()).toBe(5)
    })

    it('calculates the score for a complete frame', () => {
      frame.addRoll(5),
      frame.addRoll(3)
      expect(frame.score()).toBe(8);
    })
  })
})