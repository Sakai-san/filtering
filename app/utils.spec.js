const utils = require('./utils');
const assert = require('chai').assert

describe('radianToDegree', function() {
  describe('argument not valid', function() {
    it('should return null when argument is not a number', function() {
      assert.equal(null, utils.radianToDegree( 'string' ));
    });
  });
  describe('argument valid', function() {
    it('should return 180 when argument is PI', function() {
      assert.equal(180, utils.radianToDegree( Math.PI ));
    });
  });
});

describe('vectorNorm', function() {
  describe('argument not valid', function() {
    it('should return null when argument is not an array', function() {
      assert.equal(null, utils.vectorNorm('10'));
    });
  });
  describe('argument not valid : empty array', function() {
    it('should return null when argument is an empty array', function() {
      assert.equal(null, utils.vectorNorm([]));
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

describe('dotProduct', function() {
  describe('argument not valid', function() {
    it('should return null when at least one argument is not an array', function() {
      assert.equal(null, utils.dotProduct( '10', [] ));
    });
  });
  describe('arguments not valid', function() {
    it('should return null when arrays have different size', function() {
      assert.equal(null, utils.dotProduct( [1], [] ));
    });
  });
  describe('arguments not valid : both empty', function() {
    it('should return null when both arrays are empty', function() {
      assert.equal(null, utils.dotProduct( [], [] ));
    });
  });
  describe('arguments valid', function() {
    it('should return 12, normal case', function() {
      assert.equal(12, utils.dotProduct( [2], [6] ));
    });
  });
});

describe('angle', function() {
  describe('argument not valid', function() {
    it('should return null when at least one argument is not an array', function() {
      assert.equal(null, utils.angle( '10', [] ));
    });
  });
  describe('arguments not valid', function() {
    it('should return null when arrays have different size', function() {
      assert.equal(null, utils.angle( [1], [] ));
    });
  });
  describe('arguments not valid : both empty array', function() {
    it('should return null when both arrays are empty', function() {
      assert.equal(null, utils.angle( [], [] ));
    });
  });
  describe('arguments valid', function() {
    it('should return PI when both vector are opposite', function() {
      assert.equal(Math.PI, utils.angle( [1,0], [-1,0] ));
    });
  });
  describe('arguments valid', function() {
    it('should return PI/2 when are in 1th quadrant', function() {
      assert.equal(Math.PI/2, utils.angle( [1,0], [0,1] ));
    });
  });
  describe('arguments valid', function() {
    it('should return 0 when vectors are same', function() {
      assert.equal(0, utils.angle( [1,0], [1,0] ));
    });
  });
  describe('arguments valid', function() {
    it('should return 0 when one vector have only but zeros', function() {
      assert.equal(0, utils.angle( [4,0], [0,0] ));
    });
  });
  describe('arguments valid', function() {
    it('should return PI/2 when vectors are in the 4th region', function() {
      assert.equal(Math.PI/2, utils.angle( [1,0], [0,-1] ));
    });
  });
});

describe('objectToArray', function() {
  describe('argument not valid', function() {
    it('should return null when argument is not an object', function() {
      assert.equal(null, utils.objectToArray( 'str' ));
    });
  });
  describe('argument valid', function() {
    it('should return an empty array when argument is an empty object', function() {
      assert.equal( 0, utils.objectToArray( {} ).length);
    });
  });
});
