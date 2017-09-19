var expect = require('chai').expect;

describe('flatten-array', function() {
  const flattenArray = require('../dist/');

  it('should flatten an array', function() {
    let test = [1, [[2, 3], 4], 5];
    expect(flattenArray(test)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should accept empty array', function() {
    let test = [];
    expect(flattenArray(test)).to.deep.equal([]);
  });

  it('should throw an error on non-Array arg', function() {
    let test = 1;
    expect(() => flattenArray(test)).to.throw(Error, /wrong argument/);
  });
});
