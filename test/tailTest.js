const tail = require('../tail');
const assert = require('chai').assert;

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe('#tail', () => {
  it('Returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('Returns "Lighthouse" for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.equal(tail(words)[0], "Lighthouse");
  });

  it('Returns 2 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.equal(tail(words).length, 2);
  });
});
