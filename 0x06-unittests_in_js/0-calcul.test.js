const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

/**
 * Tests for calculateNumber function.
 */
describe('calculateNumber', () => {
  /**
   * Test if two numbers are correctly rounded and added.
   */
  it('should correctly round and add two numbers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  /**
   * Test if two numbers are correctly rounded and added (2nd round).
   */
  it('should correctly round and add two numbers (2nd round)', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  /**
   * Test if two numbers are correctly rounded and added (3rd round).
   */
  it('should correctly round and add two numbers (3rd round)', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  /**
   * Test if two numbers are correctly rounded and added (4th round).
   */
  it('should correctly round and add two numbers (4th round)', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  /**
   * Test if negative numbers are correctly rounded and added.
   */
  it('should correctly round and add negative numbers', () => {
    assert.equal(calculateNumber(-1.3, -3.7), -5);
  });
});
