const utils = require('./utils');
const assert = require('chai').assert


describe('vectorNorm', function() {
  describe('argument null', function() {
    it('should return null when argument is not an array', function() {
      assert.equal(null, utils.vectorNorm('10'));
    });
  });
  describe('argument is empty array', function() {
    it('should return 0 when argument is an empty array', function() {
      assert.equal(0, utils.vectorNorm([]));
    });
  });
  describe('argument valid : an array with 1 element', function() {
    it('should return 2', function() {
      assert.equal(2, utils.vectorNorm([2]));
    });
  });
  describe('argument valid : an array with 2 elements', function() {
    it('should return 5', function() {
      assert.equal(5, utils.vectorNorm([3, 4]));
    });
  });
});

/*
console.log( "angle 180° ", utils.radianToDegree(utils.angle( [8, 0], [-8 , 0 ]) ));
console.log( "angle 90° ", utils.radianToDegree(utils.angle( [1, 0], [0 , 1]) ));
console.log( "angle 45° ", utils.radianToDegree( utils.angle( [2, 2], [5 , 0]) ));
console.log( "angle 315° ", utils.radianToDegree( utils.angle( [5, 0], [2 , -2] ) ));
*/
