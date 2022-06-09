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

  describe('.strike', () => {
    it('returns false when strike has not been scored', () => {
      frame.addRoll(8),
      frame.addRoll(1);
      expect(frame.strike()).toBe(false);
    })

    it('responds true when a strike has been scored', () => {
      frame.addRoll(10)
      expect(frame.strike()).toBe(true);
    })
  })

  describe('.spare', () => {
    it('returns false if a spare has not been scored', () => {
      frame.addRoll(5),
      frame.addRoll(2);
      expect(frame.spare()).toBe(false)
    })

    it('returns true if a spare has been scored', () => {
      frame.addRoll(5),
      frame.addRoll(5);
      expect(frame.spare()).toBe(true)
    })
  })
})