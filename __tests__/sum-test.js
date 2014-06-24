jest.dontMock('../sum.js');
//jest.mock('../thing.js');

describe('sum', function() {
  it('adds numbers', function() {
    var sum = require('../sum.js');
    var thing = require ('../thing.js');
    expect(sum(1, 2)).toBe(3);
  });

  it('mocks thing?', function() {
    var thing = require('../thing.js');
    expect(thing()).toBe(undefined);
  });

  it('does not when I ask nicely', function() {
    jest.dontMock('../thing.js');
    var thing = require('../thing.js');
    expect(thing()).toBe(2);
  });
});
